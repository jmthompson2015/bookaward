import InputValidator from "../utility/InputValidator.js";

import Assessment from "../artifact/Assessment.js";
import Library from "../artifact/Library.js";

import Action from "../model/Action.js";
import BookComparator from "../model/BookComparator.js";
import UrlGenerator from "../model/UrlGenerator.js";

import Select from "./Select.js";

const BookColumns = [
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
      const nominees = this.props.nominees;
      const rows = [];

      nominees.forEach(function(nominee, i)
      {
         rows.push(this.createRow(nominee, i));
      }.bind(this));

      const table = React.createElement(Reactable.Table,
      {
         className: "dataTable",
         columns: BookColumns,
         sortable: true,
      }, rows);

      const rows2 = [];

      const rowCount = "Row Count: " + nominees.length;
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

      const assessmentKey = nominee.assessmentKey;
      const labelFunction = function(value)
      {
         return Assessment.properties[value].name;
      };

      const selector = React.createElement(Select,
      {
         key: nominee.book.toString() + "_" + assessmentKey,
         values: Assessment.keys(),
         initialSelectedValue: assessmentKey,
         labelFunction: labelFunction,
         onChange: this.handleChange.bind(this),
         clientProps:
         {
            "data-booktitle": nominee.book.title,
            "data-bookauthor": nominee.book.author,
         }
      });

      const answer = React.createElement(Reactable.Td,
      {
         key: key,
         className: column.className,
         column: column.key,
         value: Assessment.keys().indexOf(assessmentKey),
      }, selector);

      return answer;
   }

   createAuthorLinkCell(key, column, author)
   {
      InputValidator.validateNotNull("key", key);
      InputValidator.validateNotNull("column", column);
      InputValidator.validateNotNull("author", author);

      const url1 = UrlGenerator.createAmazonSearchUrl(author);
      const url2 = UrlGenerator.createGoodreadsSearchUrl(author);
      const url3 = UrlGenerator.createWikipediaSearchUrl(author);
      const image1 = this.createImageLink(1, url1, "../resource/image/Amazon18.png", "Amazon");
      const image2 = this.createImageLink(2, url2, "../resource/image/Goodreads18.png", "Goodreads");
      const image3 = this.createImageLink(3, url3, "../resource/image/Wikipedia18.png", "Wikipedia");
      const imageSpan = ReactDOMFactories.span(
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

      const cells = [];
      let value = "";

      Library.keys().forEach(function(libraryKey)
      {
         const library = Library.properties[libraryKey];
         const url = UrlGenerator.createLibrarySearchUrl(library, nominee.book.toString());
         const image = this.createImageLink(cells.length, url, library.image, library.name);
         cells.push(image);
         value += library.shortName + " ";
      }, this);

      const links = ReactDOMFactories.span(
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

      const rows = [];
      let value = "";

      nominations.forEach(function(nomination)
      {
         const winnerImage = this.context.store.getState().winnerImage;
         const prefix = (nomination.isWinner ?
            ReactDOMFactories.img(
            {
               className: "winner",
               src: winnerImage,
               title: "Winner",
            }) :
            "");
         const link = this.createLink(UrlGenerator.createAwardUrl(nomination.award, nomination.year), nomination.award.name);

         const cell = ReactDOMFactories.td(
         {}, prefix, nomination.year, " ", link, " ", nomination.category.name);
         value += nomination.year + " ";
         value += nomination.award.name + " ";
         value += nomination.category.name + " ";

         rows.push(ReactDOMFactories.tr(
         {
            key: rows.length,
         }, cell));
      }, this);

      const nominationsTable = ReactDOMFactories.table(
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

      const cells = [];
      let i = 0;
      cells.push(this.createAssessmentCell(cells.length, BookColumns[i++], nominee));
      cells.push(this.createTitleLinkCell(cells.length, BookColumns[i++], nominee));
      cells.push(this.createAuthorLinkCell(cells.length, BookColumns[i++], nominee.book.author));
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

      const url1 = UrlGenerator.createAmazonSearchUrl(nominee.book.toString());
      const url2 = nominee.dclUrl;
      const url3 = UrlGenerator.createGoodreadsSearchUrl(nominee.book.toString());
      const title = nominee.book.title;
      const value = BookComparator.prepareName(nominee.book.title);
      const image1 = this.createImageLink(1, url1, "../resource/image/Amazon18.png", "Amazon");
      let image2;
      if (url2 !== undefined)
      {
         image2 = this.createImageLink(3, url2, "../resource/image/DouglasCountyLibraries18.png", "Douglas County Libraries");
      }
      const image3 = this.createImageLink(2, url3, "../resource/image/Goodreads18.png", "Goodreads");
      const imageSpan = ReactDOMFactories.span(
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
      let answer;

      const books = this.context.store.getState().books;

      for (let i = 0; i < books.length; i++)
      {
         const book = books[i];

         if (book.title === title && book.author === author)
         {
            answer = book;
            break;
         }
      }

      return answer;
   }

   handleChange(event)
   {
      const selectedValue = event.currentTarget.value;
      const booktitle = event.currentTarget.dataset.booktitle;
      const bookauthor = event.currentTarget.dataset.bookauthor;
      const book = this.findBook(booktitle, bookauthor);
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