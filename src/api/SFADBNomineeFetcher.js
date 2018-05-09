import ArrayUtilities from "../utility/ArrayUtilities.js";
import InputValidator from "../utility/InputValidator.js";

import SciFiAward from "../artifact/SciFiAward.js";

import Book from "../model/Book.js";
import Nomination from "../model/Nomination.js";

function SFADBNomineeFetcher(award, year, callback)
{
   InputValidator.validateNotNull("award", award);
   InputValidator.validateNotNull("year", year);
   InputValidator.validateNotNull("callback", callback);

   this.award = function()
   {
      return award;
   };

   const books = [];
   const bookToNomination = {};
   let xmlDocument;

   this.fetchData = function()
   {
      LOGGER.trace("SFADBNomineeFetcher.fetchData() start");

      const url = createUrl();
      $.ajax(url).done(this.receiveData).fail(function(jqXHR, textStatus, errorThrown)
      {
         LOGGER.error(errorThrown);
      });

      LOGGER.trace("SFADBNomineeFetcher.fetchData() end");
   };

   this.receiveData = function(xmlDocumentIn)
   {
      InputValidator.validateNotNull("xmlDocument", xmlDocumentIn);

      LOGGER.trace("SFADBNomineeFetcher.receiveData() start");

      xmlDocument = xmlDocumentIn;
      LOGGER.trace("award = " + award.name);
      LOGGER.trace("xmlDocument = " + (new XMLSerializer()).serializeToString(xmlDocument));
      let content = xmlDocument.children[0].children[0].children[0];
      content = content.innerHTML;
      content = content.replace(/&lt;/g, "<");
      content = content.replace(/&gt;/g, ">");
      xmlDocument.children[0].children[0].children[0].innerHTML = content;
      parse();
      LOGGER.info(award.name + " books.length = " + books.length);
      callback(books, bookToNomination);

      LOGGER.trace("SFADBNomineeFetcher.receiveData() end");
   };

   function createUrl()
   {
      const baseUrl = "https://query.yahooapis.com/v1/public/yql?q=";
      const sourceUrl = award.url + year;

      const query = "select * from htmlstring where url=\"" + sourceUrl + "\"";
      const answer = baseUrl + encodeURIComponent(query) + "&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
      LOGGER.debug("url = " + answer);

      return answer;
   }

   function forEachRow(rows, callback)
   {
      let thisRow = rows.iterateNext();

      while (thisRow)
      {
         callback(thisRow);

         thisRow = rows.iterateNext();
      }
   }

   function parse()
   {
      LOGGER.trace("SFADBNomineeFetcher.parse() start");

      // This gives the category set.
      const xpath = "//div[@class='categoryblock']";
      const resultType = XPathResult.ORDERED_NODE_ITERATOR_TYPE;
      const rows = xmlDocument.evaluate(xpath, xmlDocument, null, resultType, null);
      var xpath2 = (award.value === SciFiAward.LOCUS ? xpath2 = "ol/li" : "ul/li");
      forEachRow(rows, function callback(xmlFragment)
      {
         parseNominees(xmlFragment, xpath2);
      });

      LOGGER.trace("SFADBNomineeFetcher.parse() end");
   }

   function parseNominees(xmlFragment, xpath)
   {
      LOGGER.trace("SFADBNomineeFetcher.parseNominees() start");
      LOGGER.debug("xmlFragment = " + (new XMLSerializer()).serializeToString(xmlFragment));

      const xpath0 = "div[@class='category']";
      const resultType0 = XPathResult.FIRST_ORDERED_NODE_TYPE;
      const element = xmlDocument.evaluate(xpath0, xmlFragment, null, resultType0, null);
      LOGGER.debug("element.singleNodeValue = " + element.singleNodeValue);
      LOGGER.debug("element.singleNodeValue.textContent = " + element.singleNodeValue.textContent);
      const category = parseCategory(element.singleNodeValue.textContent.trim());

      if (category)
      {
         LOGGER.debug("category = " + category);
         const resultType = XPathResult.ORDERED_NODE_SNAPSHOT_TYPE;
         const cells = xmlDocument.evaluate(xpath, xmlFragment, null, resultType, null);
         LOGGER.debug("cells.snapshotLength = " + cells.snapshotLength);
         for (let i = 0; i < cells.snapshotLength; i++)
         {
            LOGGER.debug(i + " snapshotItem = " + cells.snapshotItem(i).textContent);
         }

         for (let j = 0; j < cells.snapshotLength; j++)
         {
            let isWinner = false;
            let titleAuthor = cells.snapshotItem(j).textContent.trim();
            if (titleAuthor.startsWith("Winner:"))
            {
               isWinner = true;
               titleAuthor = titleAuthor.substring(7).trim();
            }
            LOGGER.debug("isWinner ? " + isWinner);

            if (titleAuthor.startsWith("(tie):"))
            {
               titleAuthor = titleAuthor.substring(6).trim();
            }

            const book = parseBook(titleAuthor);
            const nomination = new Nomination(award, category, year, isWinner);
            add(book, nomination);
         }
      }

      LOGGER.trace("SFADBNomineeFetcher.parseNominees() end");
   }

   function add(book, nomination)
   {
      InputValidator.validateNotNull("book", book);
      InputValidator.validateNotNull("nomination", nomination);

      if (!ArrayUtilities.containsUsingEquals(books, book, function(a, b)
         {
            return a.title === b.title && a.author === b.author;
         }))
      {
         books.push(book);
         bookToNomination[book] = [];
      }
      const nominations = bookToNomination[book];

      if (!nominations.includes(nomination))
      {
         nominations.push(nomination);
      }
   }

   function parseAuthor(author)
   {
      InputValidator.validateNotNull("author", author);

      let answer = author;

      const index = answer.indexOf("(");

      if (index >= 0)
      {
         answer = answer.substring(0, index).trim();
         answer = answer.replace(/\n/g, "");
         answer = answer.replace(/     /g, " ");
         answer = answer.replace(/    /g, " ");
         answer = answer.replace(/   /g, " ");
         answer = answer.replace(/  /g, " ");
         answer = answer.replace(/&amp;/g, "&");
      }

      return answer;
   }

   function parseBook(titleAuthor)
   {
      InputValidator.validateNotNull("titleAuthor", titleAuthor);

      let myTitleAuthor = titleAuthor.trim();
      myTitleAuthor = myTitleAuthor.replace(/\n/g, "");
      LOGGER.debug("myTitleAuthor = " + myTitleAuthor);
      const index = myTitleAuthor.indexOf(", ");
      let title;
      let author;

      if (index >= 0)
      {
         title = myTitleAuthor.substring(0, index).trim();
         author = parseAuthor(myTitleAuthor.substring(index + 2).trim());
      }

      // Special case for 2015.
      if (author === "Adam Roberts" && title.length === 4 && title.charAt(0) === "B" && title.endsWith("te"))
      {
         title = "B\u00EAte";
      }

      LOGGER.debug("title = _" + title + "_");
      LOGGER.debug("author = _" + author + "_");

      return new Book(title, author);
   }

   function parseCategory(categoryName)
   {
      InputValidator.validateNotNull("categoryName", categoryName);

      let myCategoryName = categoryName;
      const index = myCategoryName.indexOf(" (");

      if (index >= 0)
      {
         myCategoryName = categoryName.substring(0, index);
      }

      LOGGER.debug("myCategoryName = _" + myCategoryName + "_");
      const properties = award.categories.properties;

      return SciFiAward.findByName(properties, myCategoryName);
   }
}

export default SFADBNomineeFetcher;