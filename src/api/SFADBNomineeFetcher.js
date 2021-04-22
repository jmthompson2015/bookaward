/* eslint no-console: ["error", { allow: ["info"] }] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_award","_year"] }] */

import SciFiAward from "../artifact/SciFiAward.js";

import Book from "../state/Book.js";
import Nomination from "../state/Nomination.js";

import FetchUtilities from "./FetchUtilities.js";

const { Extractor: EX } = StringUtilities;

const EXCLUDE_CATEGORIES = ["Novella", "Short Fiction", "Shorter Fiction"];

const add = (bookToNomination0, book, nomination) => {
  const bookToNomination = bookToNomination0;
  const nominations = bookToNomination[book];

  if (Array.isArray(nominations)) {
    nominations.push(nomination);
  } else {
    bookToNomination[book] = [nomination];
  }
};

const parseBook = (cell0, cell1) => {
  let title = EX.between(cell0, "<b>", "</b>");

  // Special case for 2018. (misspelling)
  if (title.indexOf("Strategem") >= 0) {
    title = title.replace("Strategem", "Stratagem");
  }

  const author = EX.between(cell1, ">", "</a>");

  return new Book(title, author);
};

// /////////////////////////////////////////////////////////////////////////////////////////////////
class SFADBNomineeFetcher {
  constructor(award, year) {
    this._award = award;
    this._year = year;
  }

  get award() {
    return this._award;
  }

  get year() {
    return this._year;
  }

  createUrl() {
    return this.award.url + this.year;
  }

  fetchData() {
    return new Promise((resolve) => {
      const receiveData = (htmlDocument) => {
        let books = [];
        let bookToNomination = {};

        if (htmlDocument) {
          const {
            books: myBooks,
            bookToNomination: myBookToNomination,
          } = this.parse(htmlDocument);
          books = myBooks;
          bookToNomination = myBookToNomination;
          console.info(`${this.award.name} books.length = ${books.length}`);
        }

        resolve({ books, bookToNomination });
      };

      const url = this.createUrl();
      const options = {};
      FetchUtilities.fetchRetry(url, options, 3)
        .then((response) => response.text())
        .then(receiveData);
    });
  }

  parse(htmlDocument) {
    // This gives the year set.
    const books = [];
    const bookToNomination = {};
    const paragraphs = htmlDocument.split('<div class="categoryblock">');

    for (let i = 1; i < 3; i += 1) {
      const paragraph = paragraphs[i];

      if (paragraph) {
        this.parseNominees(books, bookToNomination, paragraph.trim());
      }
    }

    return { books, bookToNomination };
  }

  parseCategory(categoryName) {
    const myCategoryName = EX.before(
      EX.between(categoryName, ">", " ("),
      "</div>"
    );
    const { properties } = this.award.categories;

    const answer = SciFiAward.findByName(properties, myCategoryName);
    if (R.isNil(answer) && !EXCLUDE_CATEGORIES.includes(myCategoryName)) {
      console.info(
        `Can't find SciFiAward for myCategoryName = :${myCategoryName}:`
      );
    }

    return answer;
  }

  parseNominee(books, bookToNomination0, category, table) {
    const cells = table.split(",");
    const bookToNomination = bookToNomination0;
    const cell0 = cells[0].trim();
    const cell1 = cells[1].trim();
    const isWinner = cell0.indexOf("Winner") >= 0;
    const book = parseBook(cell0, cell1);
    const nomination = new Nomination(
      this.award,
      category,
      this.year,
      isWinner
    );
    books.push(book);
    add(bookToNomination, book, nomination);
  }

  parseNominees(books, bookToNomination, paragraph) {
    const key00 = paragraph.indexOf("<ul>") >= 0 ? "<ul>" : "<ol>";
    const parts = paragraph.split(key00);
    const category = this.parseCategory(parts[0].trim());
    const parts1 = EX.before(parts[1].trim(), "</li>", true);

    if (category !== undefined) {
      const tables = parts1.trim().split("<li");
      for (let i = 1; i < tables.length; i += 1) {
        const table = tables[i];
        this.parseNominee(books, bookToNomination, category, table);
      }
    }
  }
}

export default SFADBNomineeFetcher;
