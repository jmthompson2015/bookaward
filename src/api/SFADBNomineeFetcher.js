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

   var books = [];
   var bookToNomination = {};
   var xmlDocument;

   this.fetchData = function()
   {
      LOGGER.trace("SFADBNomineeFetcher.fetchData() start");

      var url = createUrl();
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
      var content = xmlDocument.children[0].children[0].children[0];
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
      var baseUrl = "https://query.yahooapis.com/v1/public/yql?q=";
      var sourceUrl = award.url + year;

      var query = "select * from htmlstring where url=\"" + sourceUrl + "\"";
      var answer = baseUrl + encodeURIComponent(query) + "&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
      LOGGER.debug("url = " + answer);

      return answer;
   }

   function forEachRow(rows, callback)
   {
      var thisRow = rows.iterateNext();

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
      var xpath = "//div[@class='categoryblock']";
      var resultType = XPathResult.ORDERED_NODE_ITERATOR_TYPE;
      var rows = xmlDocument.evaluate(xpath, xmlDocument, null, resultType, null);
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

      var xpath0 = "div[@class='category']";
      var resultType0 = XPathResult.FIRST_ORDERED_NODE_TYPE;
      var element = xmlDocument.evaluate(xpath0, xmlFragment, null, resultType0, null);
      LOGGER.debug("element.singleNodeValue = " + element.singleNodeValue);
      LOGGER.debug("element.singleNodeValue.textContent = " + element.singleNodeValue.textContent);
      var category = parseCategory(element.singleNodeValue.textContent.trim());

      if (category)
      {
         LOGGER.debug("category = " + category);
         var resultType = XPathResult.ORDERED_NODE_SNAPSHOT_TYPE;
         var cells = xmlDocument.evaluate(xpath, xmlFragment, null, resultType, null);
         LOGGER.debug("cells.snapshotLength = " + cells.snapshotLength);
         for (var i = 0; i < cells.snapshotLength; i++)
         {
            LOGGER.debug(i + " snapshotItem = " + cells.snapshotItem(i).textContent);
         }

         for (var j = 0; j < cells.snapshotLength; j++)
         {
            var isWinner = false;
            var titleAuthor = cells.snapshotItem(j).textContent.trim();
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

            var book = parseBook(titleAuthor);
            var nomination = new Nomination(award, category, year, isWinner);
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
      var nominations = bookToNomination[book];

      if (!nominations.includes(nomination))
      {
         nominations.push(nomination);
      }
   }

   function parseAuthor(author)
   {
      InputValidator.validateNotNull("author", author);

      var answer = author;

      var index = answer.indexOf("(");

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

      var myTitleAuthor = titleAuthor.trim();
      myTitleAuthor = myTitleAuthor.replace(/\n/g, "");
      LOGGER.debug("myTitleAuthor = " + myTitleAuthor);
      var index = myTitleAuthor.indexOf(", ");
      var title;
      var author;

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

      var myCategoryName = categoryName;
      var index = myCategoryName.indexOf(" (");

      if (index >= 0)
      {
         myCategoryName = categoryName.substring(0, index);
      }

      LOGGER.debug("myCategoryName = _" + myCategoryName + "_");
      var properties = award.categories.properties;

      return SciFiAward.findByName(properties, myCategoryName);
   }
}

export default SFADBNomineeFetcher;