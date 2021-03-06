import Assessment from "../artifact/Assessment.js";
import Library from "../artifact/Library.js";

import Book from "../state/Book.js";

import UrlGenerator from "../model/UrlGenerator.js";

const { ReactUtilities: RU, Select } = ReactComponent;

const ASSESSMENT_VALUES = R.reduce(
  (accum, assessment) => {
    if (assessment.key !== Assessment.BOOK_CLUB_PICK) {
      const newAssessment = R.mergeRight(assessment, {
        label: assessment.key === Assessment.NONE ? "-none-" : assessment.name,
      });
      return R.append(newAssessment, accum);
    }
    return accum;
  },
  [],
  Assessment.values()
);
const BOOK_CLUB_PICK = Assessment.properties[Assessment.BOOK_CLUB_PICK].name;

const mapIndexed = R.addIndex(R.map);

const createLink = (key, href, label) =>
  ReactDOMFactories.a({ key, href, target: "_blank" }, label);

const createImageLink = (key, href, src, title) =>
  ReactDOMFactories.a(
    { key, className: "imageLink", href, target: "_blank", title },
    ReactDOMFactories.img({ src, title })
  );

const createAssessmentCell = (row) => {
  if (Book.isClubNominee(row.nominations)) {
    return BOOK_CLUB_PICK;
  }

  const { assessmentKey, book } = row;
  const key = `${book.toString()}_${assessmentKey}`;
  const onChange = (myBook) => (myAssessmentKey) => {
    row.selectOnChange(myBook, myAssessmentKey);
  };

  const selector = React.createElement(Select, {
    key,
    id: key,
    values: ASSESSMENT_VALUES,
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

  return ReactDOMFactories.span(
    { key: `authorLink_${author}` },
    author,
    imageSpan
  );
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
  const mapFunction = (nomination, i) => {
    const prefix = nomination.isWinner
      ? ReactDOMFactories.img({
          key: `winner${i}`,
          className: "winner ph1 v-mid",
          src: winnerImage,
          title: "Winner",
        })
      : "";
    const href = UrlGenerator.createAwardUrl(nomination.award, nomination.year);
    const link = createLink(`link${i}`, href, nomination.award.name);

    const parts = [
      prefix,
      nomination.year,
      " ",
      link,
      " ",
      nomination.category.name,
    ];
    const cell = RU.createCell(parts, `cell${i}`);

    return RU.createRow(cell, `row${i}`);
  };
  const rows = mapIndexed(mapFunction, nominations);

  return RU.createTable(rows, "nominationsTable", "f7 tl v-mid");
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

const invertAuthorName = (author) => {
  const index = author.lastIndexOf(" ");
  const first = author.substring(0, index);
  const last = author.substring(index + 1);

  return `${last}, ${first}`;
};

// /////////////////////////////////////////////////////////////////////////////
const TableColumns = [
  {
    key: "assessmentKey",
    label: "Assessment",
    className: "f7 tl",
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
    valueFunction: (row) => invertAuthorName(row.author),
    cellFunction: (row) => createAuthorLinkCell(row.author),
  },
  {
    key: "nominationsString",
    label: "Nominations",
    cellFunction: (row) =>
      createNominationsCell(row.nominations, row.winnerImage),
  },
  {
    key: "library",
    label: "Library Search",
    type: "none",
    cellFunction: (row) => createLibraryLinkCell(row),
  },
];

Object.freeze(TableColumns);

export default TableColumns;
