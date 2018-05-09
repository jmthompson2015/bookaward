import InputValidator from "../utility/InputValidator.js";

import Library from "../artifact/Library.js";

import UrlGenerator from "../model/UrlGenerator.js";

function DCLURLFetcher(book, callback)
{
   InputValidator.validateNotNull("book", book);
   InputValidator.validateNotNull("callback", callback);

   this.book = function()
   {
      return book;
   };

   let dclUrl;
   let xmlDocument;
   const BASE_URL = "https://dcl.bibliocommons.com";

   this.fetchData = function()
   {
      LOGGER.trace("DCLURLFetcher.fetchData() start");

      const url = createUrl();
      $.ajax(url).done(this.receiveData).fail(function(jqXHR, textStatus, errorThrown)
      {
         LOGGER.error(errorThrown);
      });

      LOGGER.trace("DCLURLFetcher.fetchData() end");
   };

   this.receiveData = function(xmlDocumentIn)
   {
      InputValidator.validateNotNull("xmlDocument", xmlDocumentIn);

      LOGGER.trace("DCLURLFetcher.receiveData() start");

      xmlDocument = xmlDocumentIn;
      LOGGER.trace("book = " + book);
      LOGGER.trace("xmlDocument = " + (new XMLSerializer()).serializeToString(xmlDocument));
      let content = xmlDocument.children[0].children[0].children[0];
      if (content !== undefined)
      {
         content = content.innerHTML;
         content = content.replace(/&lt;/g, "<");
         content = content.replace(/&gt;/g, ">");
         xmlDocument.children[0].children[0].children[0].innerHTML = content;
      }
      parse();
      LOGGER.debug("dclUrl = " + dclUrl);
      callback(book, dclUrl);

      LOGGER.trace("DCLURLFetcher.receiveData() end");
   };

   function createUrl()
   {
      const baseUrl = "https://query.yahooapis.com/v1/public/yql?q=";

      const library = Library.properties[Library.DCL];
      const subject = book.toString();
      const sourceUrl = UrlGenerator.createLibrarySearchUrl(library, subject);

      const query = "select * from htmlstring where url=\"" + sourceUrl + "\"";
      const answer = baseUrl + encodeURIComponent(query) + "&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
      LOGGER.debug("url = " + answer);

      return answer;
   }

   function parse()
   {
      LOGGER.trace("DCLURLFetcher.parse() start");

      // This gives the book set.
      const xpath = "//span/text()[', Book' = substring(., string-length(.) - string-length(', Book') + 1)]/../../../../a/@href";
      const resultType = XPathResult.ORDERED_NODE_ITERATOR_TYPE;
      const rows = xmlDocument.evaluate(xpath, xmlDocument, null, resultType, null);
      const row = rows.iterateNext();
      LOGGER.trace("row = " + row);

      if (row)
      {
         dclUrl = BASE_URL + row.value;

         if (dclUrl === undefined)
         {
            LOGGER.warn("missing row for book = " + book);
         }
      }
      else
      {
         parse2();
      }

      LOGGER.trace("DCLURLFetcher.parse() end");
   }

   function parse2()
   {
      LOGGER.trace("DCLURLFetcher.parse2() start");

      // This gives the book set.
      let title = book.title;
      title = title.replace(/'/g, "");
      LOGGER.trace("title = " + title);
      const xpath = "//span/text()['Book' = substring(., string-length(.) - string-length('Book') + 1)]/../../../../../../../../../../../..//a[text()='" + title + "']/@href";
      const resultType = XPathResult.ORDERED_NODE_ITERATOR_TYPE;
      const rows = xmlDocument.evaluate(xpath, xmlDocument, null, resultType, null);
      let row = rows.iterateNext();
      LOGGER.trace("row = " + row);

      while (row)
      {
         const myTitle = row.value;
         LOGGER.trace("myTitle = " + myTitle);

         if (myTitle)
         {
            dclUrl = BASE_URL + row.value;
            break;
         }

         row = rows.iterateNext();
      }

      if (dclUrl === undefined)
      {
         LOGGER.warn("missing row for book = " + book);
      }

      LOGGER.trace("DCLURLFetcher.parse2() end");
   }
}

export default DCLURLFetcher;