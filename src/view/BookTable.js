import InputValidator from "../utility/InputValidator.js";

import Assessment from "../artifact/Assessment.js";
import Library from "../artifact/Library.js";

import Action from "../model/Action.js";
import BookComparator from "../model/BookComparator.js";
import UrlGenerator from "../model/UrlGenerator.js";

import Select from "./Select.js";

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

class BookTable extends React.Component
{
   render()
   {
      var nominees = this.props.nominees;
      var rows = [];

      nominees.forEach(function(nominee, i)
      {
         rows.push(this.createRow(nominee, i));
      }.bind(this));

      var table = React.createElement(Reactable.Table,
      {
         className: "dataTable",
         columns: BookColumns,
         sortable: true,
      }, rows);

      var rows2 = [];

      var rowCount = "Row Count: " + nominees.length;
      rows2.push(ReactDOMFactories.tr(
      {
         key: rows2.length
      }, ReactDOMFactories.td(
      {
         className: "rowCount"
      }, rowCount)));
      rows2.push(ReactDOMFactories.tr(
      {
         key: rows2.length
      }, ReactDOMFactories.td(
      {}, table)));

      return ReactDOMFactories.table(
      {}, ReactDOMFactories.tbody(
      {}, rows2));
   }

   createAssessmentCell(key, column, nominee)
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
         onChange: this.handleChange.bind(this),
         clientProps:
         {
            "data-booktitle": nominee.book.title(),
            "data-bookauthor": nominee.book.author(),
         }
      });

      var answer = React.createElement(Reactable.Td,
      {
         key: key,
         className: column.className,
         column: column.key,
         value: Assessment.values().indexOf(assessmentKey),
      }, selector);

      return answer;
   }

   createAuthorLinkCell(key, column, author)
   {
      InputValidator.validateNotNull("key", key);
      InputValidator.validateNotNull("column", column);
      InputValidator.validateNotNull("author", author);

      var url1 = UrlGenerator.createAmazonSearchUrl(author);
      var url2 = UrlGenerator.createGoodreadsSearchUrl(author);
      var url3 = UrlGenerator.createWikipediaSearchUrl(author);
      var image1 = this.createImageLink(1, url1, "../resource/image/Amazon18.png", "Amazon");
      var image2 = this.createImageLink(2, url2, "../resource/image/Goodreads18.png", "Goodreads");
      var image3 = this.createImageLink(3, url3, "../resource/image/Wikipedia18.png", "Wikipedia");
      var imageSpan = ReactDOMFactories.span(
      {
         className: "imageBlock",
      }, image1, image2, image3);

      return React.createElement(Reactable.Td,
      {
         key: key,
         className: column.className,
         column: column.key,
         value: author,
      }, ReactDOMFactories.span(
      {}, author, imageSpan));
   }

   createImageLink(key, href, src, title)
   {
      InputValidator.validateNotNull("key", key);
      InputValidator.validateNotNull("href", href);
      InputValidator.validateNotNull("src", src);
      InputValidator.validateNotNull("title", title);

      return ReactDOMFactories.a(
      {
         key: key,
         className: "imageLink",
         href: href,
         target: "_blank",
         title: title,
      }, ReactDOMFactories.img(
      {
         src: src,
         title: title,
      }));
   }

   createLibraryLinkCell(key, column, nominee)
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

      var links = ReactDOMFactories.span(
      {}, cells);

      return React.createElement(Reactable.Td,
      {
         key: key,
         className: column.className,
         column: column.key,
         value: value,
      }, links);
   }

   createLink(href, label)
   {
      InputValidator.validateNotNull("href", href);
      InputValidator.validateNotNull("label", label);

      return ReactDOMFactories.a(
      {
         href: href,
         target: "_blank",
      }, label);
   }

   createNominationsCell(key, column, nominations)
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
            ReactDOMFactories.img(
            {
               className: "winner",
               src: winnerImage,
               title: "Winner",
            }) :
            "");
         var link = this.createLink(UrlGenerator.createAwardUrl(nomination.award(), nomination.year()), nomination.award().name);

         var cell = ReactDOMFactories.td(
         {}, prefix, nomination.year(), " ", link, " ", nomination.category().name);
         value += nomination.year() + " ";
         value += nomination.award().name + " ";
         value += nomination.category().name + " ";

         rows.push(ReactDOMFactories.tr(
         {
            key: rows.length,
         }, cell));
      }, this);

      var nominationsTable = ReactDOMFactories.table(
      {
         className: "nominationsTable",
      }, ReactDOMFactories.tbody(
      {}, rows));

      return React.createElement(Reactable.Td,
      {
         key: key,
         className: column.className,
         column: column.key,
         value: value,
      }, nominationsTable);
   }

   createRow(nominee, key)
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

      return React.createElement(Reactable.Tr,
      {
         key: key,
      }, cells);
   }

   createTitleLinkCell(key, column, nominee)
   {
      InputValidator.validateNotNull("key", key);
      InputValidator.validateNotNull("column", column);
      InputValidator.validateNotNull("nominee", nominee);

      var url1 = UrlGenerator.createAmazonSearchUrl(nominee.book.toString());
      var url2 = nominee.dclUrl;
      var url3 = UrlGenerator.createGoodreadsSearchUrl(nominee.book.toString());
      var title = nominee.book.title();
      var value = BookComparator.prepareName(nominee.book.title());
      var image1 = this.createImageLink(1, url1, "../resource/image/Amazon18.png", "Amazon");
      var image2;
      if (url2 !== undefined)
      {
         image2 = this.createImageLink(3, url2, "../resource/image/DouglasCountyLibraries18.png", "Douglas County Libraries");
      }
      var image3 = this.createImageLink(2, url3, "../resource/image/Goodreads18.png", "Goodreads");
      var imageSpan = ReactDOMFactories.span(
      {
         className: "imageBlock",
      }, image1, image2, image3);

      return React.createElement(Reactable.Td,
      {
         key: key,
         className: column.className,
         column: column.key,
         value: value,
      }, ReactDOMFactories.span(
      {
         className: "textImageLink",
      }, title, imageSpan));
   }

   findBook(title, author)
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
   }

   handleChange(event)
   {
      var selectedValue = event.currentTarget.value;
      var booktitle = event.currentTarget.dataset.booktitle;
      var bookauthor = event.currentTarget.dataset.bookauthor;
      var book = this.findBook(booktitle, bookauthor);
      LOGGER.debug("book = " + book);
      this.context.store.dispatch(Action.setAssessment(book, selectedValue));
   }
}

BookTable.contextTypes = {
   store: PropTypes.object.isRequired,
};

BookTable.propTypes = {
   nominees: PropTypes.array.isRequired,
};

export default BookTable;