"use strict";

define(["MysteryAward", "Book", "Library", "util/InputValidator", "process/ui/UrlGenerator"],
   function(Award, Book, Library, InputValidator, UrlGenerator)
   {
      function DCLURLFetcher(book, callback)
      {
         InputValidator.validateNotNull("book", book);
         InputValidator.validateNotNull("callback", callback);

         this.book = function()
         {
            return book;
         };

         var dclUrl;
         var xmlDocument;
         var BASE_URL = "https://dcl.bibliocommons.com";

         this.fetchData = function()
         {
            LOGGER.trace("DCLURLFetcher.fetchData() start");

            var url = createUrl();
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
            var content = xmlDocument.children[0].children[0].children[0];
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
            var baseUrl = "https://query.yahooapis.com/v1/public/yql?q=";

            var library = Library.properties[Library.DCL];
            var subject = book.toString();
            var sourceUrl = UrlGenerator.createLibrarySearchUrl(library, subject);

            var query = "select * from htmlstring where url=\"" + sourceUrl + "\"";
            var answer = baseUrl + encodeURIComponent(query) + "&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
            LOGGER.debug("url = " + answer);

            return answer;
         }

         function parse()
         {
            LOGGER.trace("DCLURLFetcher.parse() start");

            // This gives the book set.
            var xpath = "//span/text()[', Book' = substring(., string-length(.) - string-length(', Book') + 1)]/../../../../a/@href";
            var resultType = XPathResult.ORDERED_NODE_ITERATOR_TYPE;
            var rows = xmlDocument.evaluate(xpath, xmlDocument, null, resultType, null);
            var row = rows.iterateNext();
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
            var title = book.title();
            title = title.replace(/'/g, "");
            LOGGER.trace("title = " + title);
            var xpath = "//span/text()['Book' = substring(., string-length(.) - string-length('Book') + 1)]/../../../../../../../../../../../..//a[text()='" + title + "']/@href";
            var resultType = XPathResult.ORDERED_NODE_ITERATOR_TYPE;
            var rows = xmlDocument.evaluate(xpath, xmlDocument, null, resultType, null);
            var row = rows.iterateNext();
            LOGGER.trace("row = " + row);

            while (row)
            {
               var myTitle = row.value;
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

      return DCLURLFetcher;
   });