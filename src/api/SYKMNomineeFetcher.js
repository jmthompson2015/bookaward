/* eslint no-console: ["error", { allow: ["info"] }] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_award"] }] */

import MysteryAward from "../artifact/MysteryAward.js";

import Book from "../state/Book.js";
import Nomination from "../state/Nomination.js";

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

const parseBook = (htmlFragment) => {
  const key0 = ">";
  const key1 = "</a>";
  const key11 = "</td>";
  const index1 = htmlFragment.indexOf(key1);
  const index0 = htmlFragment.lastIndexOf(key0, index1) + 1;
  const title0 = htmlFragment.substring(index0, index1).trim();
  const title = title0
    .replace("&#8217;", "'")
    .replace("&#x2019;", "'")
    .replace("&rsquo;", "'")
    .replace("&amp;", "&");
  let index3 = htmlFragment.indexOf(key1, index1 + 1);

  if (index3 < 0) {
    index3 = htmlFragment.indexOf(key11, index1 + 1);
  }

  const index2 = htmlFragment.lastIndexOf(key0, index3) + 1;
  let author = htmlFragment.substring(index2, index3).trim();

  if (author.startsWith("by ")) {
    author = author.substring("by ".length);
  }
  author = author.replace("&rsquo;", "'");

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
    const paragraphs = htmlDocument.split(
      '<p align="center" class="AuthorSub">'
    );

    for (let i = 2; i < 4; i += 1) {
      const paragraph = paragraphs[i];
      this.parseNominees(books, bookToNomination, paragraph.trim());
    }

    return { books, bookToNomination };
  }

  parseCategory(htmlFragment) {
    const key0 = "<strong>";
    const index0 = htmlFragment.indexOf(key0);
    const key1 = "</strong>";
    const index1 = htmlFragment.indexOf(key1, index0);
    const categoryName = htmlFragment
      .substring(index0 + key0.length, index1)
      .trim();
    let myCategoryName = categoryName.replace("  ", " ");
    myCategoryName = myCategoryName.replace(":", "");
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
    const index0 = paragraph.indexOf("<");
    const yearString = paragraph.substring(0, index0);
    const year = parseInt(yearString, 10);
    const tables = paragraph.split("<table");

    for (let i = 1; i < tables.length; i += 1) {
      const table = tables[i];
      this.parseNominee(books, bookToNomination, table, year);
    }
  }
}

export default SYKMNomineeFetcher;
