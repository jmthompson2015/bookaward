import Assessment from "../artifact/Assessment.js";
import Library from "../artifact/Library.js";

import UrlGenerator from "../model/UrlGenerator.js";

const { ReactUtilities: RU, Select } = ReactComponent;

const createLink = (href, label) =>
  ReactDOMFactories.a({ href, target: "_blank" }, label);

const createImageLink = (key, href, src, title) =>
  ReactDOMFactories.a(
    { key, className: "imageLink", href, target: "_blank", title },
    ReactDOMFactories.img({ src, title })
  );

const createAssessmentCell = (row) => {
  const { assessmentKey, book } = row;
  const mapFunction = (assessment) =>
    R.mergeRight(assessment, { label: assessment.name });
  const values = R.map(mapFunction, Assessment.values());
  const key = `${book.toString()}_${assessmentKey}`;
  const onChange = (myBook) => (myAssessmentKey) => {
    row.selectOnChange(myBook, myAssessmentKey);
  };

  const selector = React.createElement(Select, {
    key,
    id: key,
    values,
    initialValue: assessmentKey,
    onChange: onChange(book),
  });

  return selector;
};

const createAuthorLinkCell = (author) => {
  const url1 = UrlGenerator.createAmazonSearchUrl(author);
  const url2 = UrlGenerator.createGoodreadsSearchUrl(author);
  const url3 = UrlGenerator.createWikipediaSearchUrl(author);
  const image1 = createImageLink(
    1,
    url1,
    "../resource/image/Amazon18.png",
    "Amazon"
  );
  const image2 = createImageLink(
    2,
    url2,
    "../resource/image/Goodreads18.png",
    "Goodreads"
  );
  const image3 = createImageLink(
    3,
    url3,
    "../resource/image/Wikipedia18.png",
    "Wikipedia"
  );
  const imageSpan = ReactDOMFactories.span(
    { className: "imageBlock fr" },
    image1,
    image2,
    image3
  );

  return ReactDOMFactories.span({}, author, imageSpan);
};

const createLibraryLinkCell = (row) => {
  const mapFunction = (library) => {
    const url = UrlGenerator.createLibrarySearchUrl(
      library,
      row.book.toString()
    );
    const { key, image, name } = library;
    return createImageLink(key, url, image, name);
  };
  const cells = R.map(mapFunction, Library.values());

  return ReactDOMFactories.span({}, cells);
};

const createNominationsCell = (nominations, winnerImage) => {
  const rows = [];

  nominations.forEach((nomination) => {
    const prefix = nomination.isWinner
      ? ReactDOMFactories.img({
          className: "winner",
          src: winnerImage,
          title: "Winner",
        })
      : "";
    const link = createLink(
      UrlGenerator.createAwardUrl(nomination.award, nomination.year),
      nomination.award.name
    );

    const cell = RU.createCell([
      prefix,
      nomination.year,
      " ",
      link,
      " ",
      nomination.category.name,
    ]);
    rows.push(RU.createRow(cell, rows.length));
  });

  return RU.createTable(rows, "nominationsTable", "f7 tl");
};

const createTitleLinkCell = (row) => {
  const url1 = UrlGenerator.createAmazonSearchUrl(row.book.toString());
  const url3 = UrlGenerator.createGoodreadsSearchUrl(row.book.toString());
  const { title } = row.book;
  const image1 = createImageLink(
    1,
    url1,
    "../resource/image/Amazon18.png",
    "Amazon"
  );
  let image2;
  const image3 = createImageLink(
    2,
    url3,
    "../resource/image/Goodreads18.png",
    "Goodreads"
  );
  const imageSpan = ReactDOMFactories.span(
    {
      className: "imageBlock fr",
    },
    image1,
    image2,
    image3
  );

  return ReactDOMFactories.span(
    { className: "textImageLink" },
    title,
    imageSpan
  );
};

// /////////////////////////////////////////////////////////////////////////////
const TableColumns = [
  {
    key: "assessmentKey",
    label: "Assessment",
    cellFunction: (row) => createAssessmentCell(row),
  },
  {
    key: "title",
    label: "Title",
    className: "tl",
    valueFunction: (row) => {
      const editTitle = (article) => (title) =>
        title.startsWith(article) ? title.substring(article.length) : title;
      return R.pipe(
        editTitle("A "),
        editTitle("An "),
        editTitle("The ")
      )(row.title);
    },
    cellFunction: (row) => createTitleLinkCell(row),
  },
  {
    key: "author",
    label: "Author",
    className: "tl",
    cellFunction: (row) => createAuthorLinkCell(row.author),
  },
  {
    key: "nominations",
    label: "Nominations",
    cellFunction: (row) =>
      createNominationsCell(row.nominations, row.winnerImage),
  },
  {
    key: "library",
    label: "Library Search",
    cellFunction: (row) => createLibraryLinkCell(row),
  },
];

export default TableColumns;
