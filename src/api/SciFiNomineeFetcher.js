import ArrayUtilities from "../utility/ArrayUtilities.js";

import SciFiAward from "../artifact/SciFiAward.js";

import BookComparator from "../model/BookComparator.js";
import NominationComparator from "../model/NominationComparator.js";

import DCLURLFetcher from "./DCLURLFetcher.js";
import NomineeFetcher from "./SFADBNomineeFetcher.js";

document.getElementById("statusBar0").innerHTML = "Loading...";

const books = [];
const bookToDclUrl = {};
const bookToNomination = {};
let count0 = 0;
let count1 = 0;
let missingCount = 0;
const date = new Date();
const year1 = date.getFullYear();
const year0 = year1 - 2;

const callback1 = ({ book, dclUrl }) => {
  bookToDclUrl[book] = dclUrl;
  count1 += 1;
  if (dclUrl === undefined) {
    missingCount += 1;
  }

  document.getElementById(
    "statusBar1"
  ).innerHTML = `count1 = ${count1} books.length = ${books.length} missingCount = ${missingCount}`;

  if (count1 === books.length) {
    let content = SciFiAward.keys().reduce((previousValue, awardKey) => {
      const awardString = `const {${awardKey}} = SciFiAward.properties;<br/>`;
      return previousValue + awardString;
    }, "");
    content += "<br/>";
    content += books.reduce((previousValue, book2) => {
      let bookString = "this.books.push(new Book(";
      bookString += `"${book2.title}", `;
      bookString += `"${book2.author}"));<br/>`;
      return previousValue + bookString;
    }, "");
    content += "<br/>";
    content += books.reduce((previousValue, book2, i) => {
      let bookString = "";
      const dclUrl2 = bookToDclUrl[book2];
      if (dclUrl2 !== undefined) {
        bookString = `this.bookToDclUrl[this.books[${i}]] = `;
        bookString += `"${dclUrl2}";<br/>`;
      }
      return previousValue + bookString;
    }, "");
    content += "<br/>this.initializeBookToNomination();<br/><br/>";
    content += books.reduce((previousValue, book2, i) => {
      const nominations = bookToNomination[book2];
      const nominationsString = nominations.reduce(
        (previousValue2, nomination) => {
          let nominationString = `this.bookToNomination[this.books[${i}]].push(new Nomination(`;
          nominationString += `${nomination.award.value}, `;
          nominationString += `${nomination.award.value}.categories.properties.${nomination.category.value}, `;
          nominationString += `${nomination.year}, `;
          nominationString += `${nomination.isWinner}));<br/>`;
          return previousValue2 + nominationString;
        },
        ""
      );
      return previousValue + nominationsString;
    }, "");
    content += "<br/>this.initializeBookToAssessment();<br/>";
    content += "this.loadBookToAssessment();<br/>";

    document.getElementById("bookTablePanel").innerHTML = content;
    document.getElementById("statusBar0").innerHTML = "";
    document.getElementById("statusBar1").innerHTML = "";
  }
};

const callback0 = ({
  books: newBooks,
  bookToNomination: newBookToNomination,
}) => {
  newBooks.forEach((book) => {
    if (
      !ArrayUtilities.containsUsingEquals(books, book, BookComparator.equals)
    ) {
      books.push(book);
    }
  });

  Object.keys(newBookToNomination).forEach((key) => {
    let nominations = bookToNomination[key];
    if (nominations === undefined) {
      nominations = [];
      bookToNomination[key] = nominations;
    }
    ArrayUtilities.addAll(nominations, newBookToNomination[key]);
  });
  count0 += 1;

  document.getElementById(
    "statusBar0"
  ).innerHTML = `count0 = ${count0} SciFiAward.keys().length = ${
    SciFiAward.keys().length
  }`;

  if (count0 === (year1 - year0 + 1) * SciFiAward.keys().length) {
    // Sort the books.
    books.sort(BookComparator.compare);

    // Sort the nominations.
    books.forEach((book) => {
      const nominations = bookToNomination[book];
      if (nominations.length > 1) {
        nominations.sort(NominationComparator.compare);
      }
    });

    // Fetch the Douglas County Libraries URLs.
    books.forEach((book) => {
      const fetcher = new DCLURLFetcher(book);
      setTimeout(fetcher.fetchData().then(callback1), 500);
    });
  }
};

for (let year = year0; year <= year1; year += 1) {
  SciFiAward.keys().forEach((awardKey) => {
    const award = SciFiAward.properties[awardKey];
    const fetcher = new NomineeFetcher(award, year);
    fetcher.fetchData().then(callback0);
  });
}
