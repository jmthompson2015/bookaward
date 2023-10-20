/* eslint no-console: ["error", { allow: ["info"] }] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_award"] }] */

import MysteryAward from "../artifact/MysteryAward.js";

import Book from "../state/Book.js";
import Nomination from "../state/Nomination.js";

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

const addTitleAndAuthor = (
  books,
  bookToNomination0,
  titleAndAuthor,
  nomination,
) => {
  const bookToNomination = bookToNomination0;

  for (let i = 0; i < titleAndAuthor.length; i += 1) {
    const book = new Book(titleAndAuthor[i][0], titleAndAuthor[i][1]);
    books.push(book);
    bookToNomination[book] = [nomination];
  }
};

const fetchData2022 = (books, bookToNomination, award) => {
  if (award.key === MysteryAward.AGATHA) {
    // Contemporary
    let categoryKey = MysteryAward.categories(award.key).CONTEMPORARY;
    let category = MysteryAward.category(award.key, categoryKey);
    let nomination = new Nomination(award, category, 2022);
    let nominationWin = new Nomination(award, category, 2022, true);

    let titleAndAuthor = ["A World of Curiosities", "Louise Penny"];
    addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nominationWin);
    titleAndAuthor = ["Bayou Book Thief", "Ellen Byron"];
    addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);
    titleAndAuthor = ["Death by Bubble Tea", "Jennifer J. Chow"];
    addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);
    titleAndAuthor = ["Fatal Reunion", "Annette Dashofy"];
    addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);
    titleAndAuthor = ["Dead Man's Leap", "Tina de Bellegarde"];
    addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);

    // First
    categoryKey = MysteryAward.categories(award.key).FIRST;
    category = MysteryAward.category(award.key, categoryKey);
    nomination = new Nomination(award, category, 2022);
    nominationWin = new Nomination(award, category, 2022, true);

    titleAndAuthor = ["Cheddar Off Dead", "Korina Moss"];
    addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nominationWin);
    titleAndAuthor = ["The Finalist", "Joan Long"];
    addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);
    titleAndAuthor = ["Death in the Aegean", "M.A. Monnin"];
    addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);
    titleAndAuthor = ["The Bangalore Detectives Club", "Harini Nagendra"];
    addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);
    titleAndAuthor = ["Devil's Chew Toy", "Rob Osler"];
    addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);
    titleAndAuthor = ["The Gallery of Beauties", "Nina Wachsman"];
    addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);

    // Historical
    categoryKey = MysteryAward.categories(award.key).HISTORICAL;
    category = MysteryAward.category(award.key, categoryKey);
    nomination = new Nomination(award, category, 2022);
    nominationWin = new Nomination(award, category, 2022, true);

    titleAndAuthor = ["Because I Could Not Stop for Death", "Amanda Flower"];
    addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nominationWin);
    titleAndAuthor = ["The Counterfeit Wife", "Mally Becker"];
    addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);
    titleAndAuthor = ["The Lindbergh Nanny", "Mariah Fredericks"];
    addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);
    titleAndAuthor = ["In Place of Fear", "Catriona McPherson"];
    addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);
    titleAndAuthor = ["Under a Vieled Moon", "Karen Odden"];
    addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);
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
        method: "GET",
        mode: "no-cors",
      };

      fetch(url, options)
        .then((response) => response.text())
        .then(receiveData)
        .catch((error) => {
          const books = [];
          const bookToNomination = {};
          fetchData2022(books, bookToNomination, this.award);
          console.info(`${this.award.name} books.length = ${books.length}`);

          resolve({ books, bookToNomination });
        });
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
