"use strict";

define(["Assessment", "BookComparator", "Library", "core-util/InputValidator", "process/Action", "process/ui/Select", "process/ui/UrlGenerator"],
   function(Assessment, BookComparator, Library, InputValidator, Action, Select, UrlGenerator)
   {
      var BookColumns = [
         {
            key: "assessment",
            label: "Assessment",
            className: "textCell",
         },
         {
            key: "title",
            label: "Title",
            className: "textCell",
         },
         {
            key: "author",
            label: "Author",
            className: "textCell",
         },
         {
            key: "nominations",
            label: "Nominations",
            className: "textCell",
         },
         {
            key: "library",
            label: "Library Search",
            className: "textCell",
         },
        ];

      var BookTable = React.createClass(
      {
         contextTypes:
         {
            store: React.PropTypes.object.isRequired,
         },

         propTypes:
         {
            nominees: React.PropTypes.array.isRequired,
         },

         // Factories.
         Table: React.createFactory(Reactable.Table),
         Tr: React.createFactory(Reactable.Tr),
         Td: React.createFactory(Reactable.Td),

         render: function()
         {
            var nominees = this.props.nominees;
            var rows = [];

            nominees.forEach(function(nominee, i)
            {
               rows.push(this.createRow(nominee, i));
            }.bind(this));

            var table = this.Table(
            {
               className: "dataTable",
               columns: BookColumns,
               sortable: true,
            }, rows);

            var rows2 = [];

            var rowCount = "Row Count: " + nominees.length;
            rows2.push(React.DOM.tr(
            {
               key: rows2.length
            }, React.DOM.td(
            {
               className: "rowCount"
            }, rowCount)));
            rows2.push(React.DOM.tr(
            {
               key: rows2.length
            }, React.DOM.td(
            {}, table)));

            return React.DOM.table(
            {}, React.DOM.tbody(
            {}, rows2));
         },

         createAssessmentCell: function(key, column, nominee)
         {
            InputValidator.validateNotNull("key", key);
            InputValidator.validateNotNull("column", column);
            InputValidator.validateNotNull("nominee", nominee);

            var assessmentKey = nominee.assessmentKey;
            var labelFunction = function(value)
            {
               return Assessment.properties[value].name;
            };

            var selector = React.createElement(Select,
            {
               key: nominee.book.toString() + "_" + assessmentKey,
               values: Assessment.values(),
               initialSelectedValue: assessmentKey,
               labelFunction: labelFunction,
               onChange: this.handleChange,
               clientProps:
               {
                  "data-booktitle": nominee.book.title(),
                  "data-bookauthor": nominee.book.author(),
               }
            });

            var answer = this.Td(
            {
               key: key,
               className: column.className,
               column: column.key,
               value: Assessment.values().indexOf(assessmentKey),
            }, selector);

            return answer;
         },

         createAuthorLinkCell: function(key, column, author)
         {
            InputValidator.validateNotNull("key", key);
            InputValidator.validateNotNull("column", column);
            InputValidator.validateNotNull("author", author);

            var url1 = UrlGenerator.createAmazonSearchUrl(author);
            var url2 = UrlGenerator.createGoodreadsSearchUrl(author);
            var url3 = UrlGenerator.createWikipediaSearchUrl(author);
            var image1 = this.createImageLink(1, url1, "../resources/Amazon18.png", "Amazon");
            var image2 = this.createImageLink(2, url2, "../resources/Goodreads18.png", "Goodreads");
            var image3 = this.createImageLink(3, url3, "../resources/Wikipedia18.png", "Wikipedia");
            var imageSpan = React.DOM.span(
            {
               className: "imageBlock",
            }, image1, image2, image3);

            return this.Td(
            {
               key: key,
               className: column.className,
               column: column.key,
               value: author,
            }, React.DOM.span(
            {}, author, imageSpan));
         },

         createImageLink: function(key, href, src, title)
         {
            InputValidator.validateNotNull("key", key);
            InputValidator.validateNotNull("href", href);
            InputValidator.validateNotNull("src", src);
            InputValidator.validateNotNull("title", title);

            return React.DOM.a(
            {
               key: key,
               className: "imageLink",
               href: href,
               target: "_blank",
               title: title,
            }, React.DOM.img(
            {
               src: src,
               title: title,
            }));
         },

         createLibraryLinkCell: function(key, column, nominee)
         {
            InputValidator.validateNotNull("key", key);
            InputValidator.validateNotNull("column", column);
            InputValidator.validateNotNull("nominee", nominee);

            var cells = [];
            var value = "";

            Library.values().forEach(function(libraryKey)
            {
               var library = Library.properties[libraryKey];
               var url = UrlGenerator.createLibrarySearchUrl(library, nominee.book.toString());
               var image = this.createImageLink(cells.length, url, library.image, library.name);
               cells.push(image);
               value += library.shortName + " ";
            }, this);

            var links = React.DOM.span(
            {}, cells);

            return this.Td(
            {
               key: key,
               className: column.className,
               column: column.key,
               value: value,
            }, links);
         },

         createLink: function(href, label)
         {
            InputValidator.validateNotNull("href", href);
            InputValidator.validateNotNull("label", label);

            return React.DOM.a(
            {
               href: href,
               target: "_blank",
            }, label);
         },

         createNominationsCell: function(key, column, nominations)
         {
            InputValidator.validateNotNull("key", key);
            InputValidator.validateNotNull("column", column);
            InputValidator.validateNotNull("nominations", nominations);

            var rows = [];
            var value = "";

            nominations.forEach(function(nomination)
            {
               var winnerImage = this.context.store.getState().winnerImage;
               var prefix = (nomination.isWinner() ?
                  React.DOM.img(
                  {
                     className: "winner",
                     src: winnerImage,
                     title: "Winner",
                  }) :
                  "");
               var link = this.createLink(UrlGenerator.createAwardUrl(nomination.award(), nomination.year()), nomination.award().name);

               var cell = React.DOM.td(
               {}, prefix, nomination.year(), " ", link, " ", nomination.category().name);
               value += nomination.year() + " ";
               value += nomination.award().name + " ";
               value += nomination.category().name + " ";

               rows.push(React.DOM.tr(
               {
                  key: rows.length,
               }, cell));
            }, this);

            var nominationsTable = React.DOM.table(
            {
               className: "nominationsTable",
            }, React.DOM.tbody(
            {}, rows));

            return this.Td(
            {
               key: key,
               className: column.className,
               column: column.key,
               value: value,
            }, nominationsTable);
         },

         createRow: function(nominee, key)
         {
            InputValidator.validateNotNull("nominee", nominee);
            InputValidator.validateNotNull("key", key);

            var cells = [];
            var i = 0;
            cells.push(this.createAssessmentCell(cells.length, BookColumns[i++], nominee));
            cells.push(this.createTitleLinkCell(cells.length, BookColumns[i++], nominee));
            cells.push(this.createAuthorLinkCell(cells.length, BookColumns[i++], nominee.book.author()));
            cells.push(this.createNominationsCell(cells.length, BookColumns[i++], nominee.nominations));
            cells.push(this.createLibraryLinkCell(cells.length, BookColumns[i++], nominee));

            return this.Tr(
            {
               key: key,
            }, cells);
         },

         createTitleLinkCell: function(key, column, nominee)
         {
            InputValidator.validateNotNull("key", key);
            InputValidator.validateNotNull("column", column);
            InputValidator.validateNotNull("nominee", nominee);

            var url1 = UrlGenerator.createAmazonSearchUrl(nominee.book.toString());
            var url2 = nominee.dclUrl;
            var url3 = UrlGenerator.createGoodreadsSearchUrl(nominee.book.toString());
            var title = nominee.book.title();
            var value = BookComparator.prepareName(nominee.book.title());
            var image1 = this.createImageLink(1, url1, "../resources/Amazon18.png", "Amazon");
            var image2;
            if (url2 !== undefined)
            {
               image2 = this.createImageLink(3, url2, "../resources/DouglasCountyLibraries18.png", "Douglas County Libraries");
            }
            var image3 = this.createImageLink(2, url3, "../resources/Goodreads18.png", "Goodreads");
            var imageSpan = React.DOM.span(
            {
               className: "imageBlock",
            }, image1, image2, image3);

            return this.Td(
            {
               key: key,
               className: column.className,
               column: column.key,
               value: value,
            }, React.DOM.span(
            {
               className: "textImageLink",
            }, title, imageSpan));
         },

         findBook: function(title, author)
         {
            var answer;

            var books = this.context.store.getState().books;

            for (var i = 0; i < books.length; i++)
            {
               var book = books[i];

               if (book.title() === title && book.author() === author)
               {
                  answer = book;
                  break;
               }
            }

            return answer;
         },

         handleChange: function(event)
         {
            var selectedValue = event.currentTarget.value;
            var booktitle = event.currentTarget.dataset.booktitle;
            var bookauthor = event.currentTarget.dataset.bookauthor;
            var book = this.findBook(booktitle, bookauthor);
            LOGGER.debug("book = " + book);
            this.context.store.dispatch(Action.setAssessment(book, selectedValue));
         },
      });

      return BookTable;
   });