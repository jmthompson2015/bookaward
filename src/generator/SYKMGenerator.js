import R from "ramda";

import MysteryAward from "../artifact/MysteryAward.js";

import BookComparator from "../state/BookComparator.js";
import NominationComparator from "../state/NominationComparator.js";

import SYKMNomineeFetcher from "../api/SYKMNomineeFetcher.js";

import FileWriter from "./FileWriter.js";

const SYKMGenerator = {};

SYKMGenerator.generate = () => {
  const start0 = Date.now();

  SYKMGenerator.load().then(({ books, bookToNomination }) => {
    const HEADER1 = `import Book from "../state/Book.js";\n\nconst SYKMBookData = [\n`;
    const mapFunction1 = (book) => {
      return `    new Book("${book.title}", "${book.author}"),`;
    };
    const newBooks = R.map(mapFunction1, books);
    const FOOTER1 = `\n];\n\nexport default SYKMBookData;\n`;
    const data1 = `${HEADER1}${newBooks.join("\n")}${FOOTER1}`;
    FileWriter.writeFile("../api/SYKMBookData.js", data1);

    const HEADER2 =
      `import MysteryAward from "../artifact/MysteryAward.js";\n` +
      `import Nomination from "../state/Nomination.js";\n\n` +
      `const SYKMBookToNominationData = {\n`;
    const reduceFunction2 = (accum, bookString) => {
      const nominations = bookToNomination[bookString];
      const mapFunction2 = (nomination) => {
        const awardKey = nomination.award.key;
        const categoryKey = nomination.category.key;
        return (
          `        new Nomination(MysteryAward.award("${awardKey}"),` +
          ` MysteryAward.category("${awardKey}", "${categoryKey}"),` +
          ` ${nomination.year}, ${nomination.isWinner}),\n`
        );
      };
      const newNominations = R.map(mapFunction2, nominations).join("");
      return `${accum}    "${bookString}": [\n${newNominations}    ],\n`;
    };
    const newBookToNomination = R.reduce(
      reduceFunction2,
      "",
      Object.keys(bookToNomination),
    );
    const FOOTER2 = `};\n\nexport default SYKMBookToNominationData;\n`;
    const data2 = `${HEADER2}${newBookToNomination}${FOOTER2}`;
    FileWriter.writeFile("../api/SYKMBookToNominationData.js", data2);

    const end0 = Date.now();
    console.info(`SYKMGenerator.generate() elapsed: ${end0 - start0} ms`);
  });
};

SYKMGenerator.load = () => {
  let myBooks = [];
  let myBookToNomination = {};

  return new Promise((resolve) => {
    const start0 = Date.now();
    const receiveCollection = ({ books, bookToNomination }) => {
      if (books.length > 0) {
        myBooks = R.uniq(R.concat(myBooks, books));
        const forEachFunction = (book) => {
          let nominations = myBookToNomination[book] || [];
          nominations = R.concat(nominations, bookToNomination[book]);
          nominations.sort(NominationComparator.compare);
          myBookToNomination = R.assoc(book, nominations, myBookToNomination);
        };
        R.forEach(forEachFunction, Object.keys(bookToNomination));
      }
    };
    const mapFunction = (award) => {
      const fetcher = new SYKMNomineeFetcher(award);
      return fetcher.fetchData().then(receiveCollection);
    };
    const promises = R.map(mapFunction, MysteryAward.valuesOmitCB());

    Promise.allSettled(promises).then(() => {
      myBooks.sort(BookComparator.compare);
      const end0 = Date.now();
      console.info(`SYKMGenerator.load() elapsed: ${end0 - start0} ms`);
      resolve({ books: myBooks, bookToNomination: myBookToNomination });
    });
  });
};

SYKMGenerator.generate();

export default SYKMGenerator;
