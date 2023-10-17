/* eslint no-console: ["error", { allow: ["info"] }] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_award"] }] */

import MysteryAward from "../artifact/MysteryAward.js";

import Book from "../state/Book.js";
import Nomination from "../state/Nomination.js";

import FetchUtilities from "./FetchUtilities.js";

const { Extractor: EX } = StringUtilities;

const add = (bookToNomination0, book, nomination) => {
  const bookToNomination = bookToNomination0;
  const nominations = bookToNomination[book];

  if (Array.isArray(nominations)) {
    nominations.push(nomination);
  } else {
    bookToNomination[book] = [nomination];
  }
};

const parseBook = (htmlFragment) => {
  const parts = htmlFragment.split("</a>");
  const title0 = EX.after(parts[0], ">", true);
  const replaceSpecialChars = R.pipe(
    R.replace("&#8217;", "'"),
    R.replace("&#x2019;", "'"),
    R.replace("&amp;", "&"),
    R.replace("&oslash;", "o"),
    R.replace("&rsquo;", "'"),
  );
  const title = replaceSpecialChars(title0);

  const partialBefore = R.partialRight(EX.before, ["</td>", false, false]);
  const partialAfter = R.partialRight(EX.after, [true, false]);
  const beforeAfterAfter = R.pipe(
    partialBefore,
    R.partialRight(partialAfter, [">"]),
    R.partialRight(partialAfter, ["by "]),
  );
  const author0 = beforeAfterAfter(parts[1]);
  const author = replaceSpecialChars(author0);

  return new Book(title, author);
};

// /////////////////////////////////////////////////////////////////////////////////////////////////
class SYKMNomineeFetcher {
  constructor(award) {
    this._award = award;
  }

  get award() {
    return this._award;
  }

  createUrl() {
    return this.award.url;
  }

  fetchData() {
    return new Promise((resolve) => {
      const receiveData = (htmlDocument) => {
        const { books, bookToNomination } = this.parse(htmlDocument);
        console.info(`${this.award.name} books.length = ${books.length}`);

        resolve({ books, bookToNomination });
      };

      const url = this.createUrl();
      const options = {
        headers: {
          Origin: "https://jmthompson2015.github.io",
        },
      };
      FetchUtilities.fetchRetry(url, options, 3)
        .then((response) => response.text())
        .then(receiveData);
    });
  }

  parse(htmlDocument) {
    // This gives the year set.
    const books = [];
    const bookToNomination = {};
    const paragraphs = htmlDocument.split(
      '<p align="center" class="AuthorSub">',
    );

    for (let i = 2; i < 4; i += 1) {
      const paragraph = paragraphs[i];
      this.parseNominees(books, bookToNomination, paragraph.trim());
    }

    return { books, bookToNomination };
  }

  parseCategory(htmlFragment) {
    const partialBetween = R.partialRight(EX.between, [
      "<strong>",
      "</strong>",
      false,
      false,
    ]);
    const categoryName = R.pipe(partialBetween, R.trim)(htmlFragment);
    const myCategoryName = R.pipe(
      R.replace(/ {2}/g, " "),
      R.replace(":", ""),
    )(categoryName);
    const { properties } = this.award.categories;

    return MysteryAward.findByName(properties, myCategoryName);
  }

  parseNominee(books, bookToNomination0, table, year) {
    const cells = table.split("<td");
    const category = this.parseCategory(cells[1].trim());
    const bookToNomination = bookToNomination0;

    if (category !== undefined) {
      for (let i = 3; i < cells.length; i += 2) {
        const isWinner = cells[i - 1].includes(">*<");
        const book = parseBook(cells[i].trim());
        const nomination = new Nomination(this.award, category, year, isWinner);
        books.push(book);
        add(bookToNomination, book, nomination);
      }
    }
  }

  parseNominees(books, bookToNomination, paragraph) {
    const yearString = EX.before(paragraph, "<");
    const year = parseInt(yearString, 10);
    const tables = paragraph.split("<table");

    for (let i = 1; i < tables.length; i += 1) {
      const table = tables[i];
      this.parseNominee(books, bookToNomination, table, year);
    }
  }
}

export default SYKMNomineeFetcher;
