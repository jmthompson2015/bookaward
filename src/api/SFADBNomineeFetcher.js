/* eslint no-console: ["error", { allow: ["info"] }] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_award","_year"] }] */

import SciFiAward from "../artifact/SciFiAward.js";

import Book from "../model/Book.js";
import Nomination from "../model/Nomination.js";

import FetchUtilities from "./FetchUtilities.js";

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
  const key0 = "<b>";
  const index0 = cell0.lastIndexOf(key0);
  const key1 = "</b>";
  const index1 = cell0.lastIndexOf(key1);
  let title = cell0.substring(index0 + key0.length, index1);

  // Special case for 2018. (misspelling)
  if (title.indexOf("Strategem") >= 0) {
    title = title.replace("Strategem", "Stratagem");
  }

  const key2 = ">";
  const key3 = "</a>";
  const index3 = cell1.lastIndexOf(key3);
  const index2 = cell1.lastIndexOf(key2, index3);
  const author = cell1.substring(index2 + key2.length, index3);

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
    // console.debug(`url = ${this.award.url + this.year}`);
    return this.award.url + this.year;
  }

  fetchData() {
    return new Promise(resolve => {
      const receiveData = htmlDocument => {
        let books = [];
        let bookToNomination = {};
        console.info(`award = ${this.award.name}`);

        if (htmlDocument) {
          const { books: myBooks, bookToNomination: myBookToNomination } = this.parse(htmlDocument);
          books = myBooks;
          bookToNomination = myBookToNomination;
          console.info(`${this.award.name} books.length = ${books.length}`);
        }

        resolve({ books, bookToNomination });
      };

      const url = this.createUrl();
      const options = {};
      FetchUtilities.fetchRetry(url, options, 3)
        .then(response => response.text())
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
    let myCategoryName = categoryName;
    const key0 = ">";
    const index0 = myCategoryName.indexOf(key0);

    if (index0 >= 0) {
      myCategoryName = myCategoryName.substring(index0 + key0.length);
    }

    const key1 = " (";
    const index1 = myCategoryName.indexOf(key1);

    if (index1 >= 0) {
      myCategoryName = myCategoryName.substring(0, index1);
    }

    const key2 = "</div>";
    const index2 = myCategoryName.indexOf(key2);

    if (index2 >= 0) {
      myCategoryName = myCategoryName.substring(0, index2);
    }

    const { properties } = this.award.categories;

    return SciFiAward.findByName(properties, myCategoryName);
  }

  parseNominee(books, bookToNomination0, category, table) {
    const cells = table.split(",");
    const bookToNomination = bookToNomination0;
    const cell0 = cells[0].trim();
    const cell1 = cells[1].trim();
    const isWinner = cell0.indexOf("Winner") >= 0;
    const book = parseBook(cell0, cell1);
    const nomination = new Nomination(this.award, category, this.year, isWinner);
    books.push(book);
    add(bookToNomination, book, nomination);
  }

  parseNominees(books, bookToNomination, paragraph) {
    const key00 = paragraph.indexOf("<ul>") >= 0 ? "<ul>" : "<ol>";
    const parts = paragraph.split(key00);
    const category = this.parseCategory(parts[0].trim());
    let parts1 = parts[1].trim();
    const key0 = "</li>";
    const index0 = parts1.lastIndexOf(key0);
    if (index0 >= 0) {
      parts1 = parts1.substring(0, index0 + key0.length);
    }

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
