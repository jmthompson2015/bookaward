/* eslint no-console: ["error", { allow: ["info"] }] */

import SciFiAward from "../artifact/SciFiAward.js";

import SFADBNomineeFetcher from "../api/SFADBNomineeFetcher.js";

import Action from "../state/Action.js";

const SciFiBookLoader = {};

SciFiBookLoader.load = (store) =>
  new Promise((resolve) => {
    const start0 = Date.now();
    const receiveCollection = ({ books, bookToNomination }) => {
      if (books.length > 0) {
        store.dispatch(Action.addBooks(books));
        store.dispatch(Action.addBookToNomination(bookToNomination));
      }
    };
    const date = new Date();
    const year2 = date.getFullYear();
    const year1 = year2 - 1;
    const year0 = year1 - 1;
    const mapFunction = (year) => (award) => {
      const fetcher = new SFADBNomineeFetcher(award, year);

      return fetcher.fetchData().then(receiveCollection);
    };
    const promises0 = R.map(mapFunction(year0), SciFiAward.values());
    const promises1 = R.map(mapFunction(year1), SciFiAward.values());
    const promises2 = R.map(mapFunction(year2), SciFiAward.values());
    const promises = R.concat(promises0, R.concat(promises1, promises2));

    Promise.allSettled(promises).then(() => {
      const end0 = Date.now();
      console.info(`SciFiBookLoader.load() elapsed: ${end0 - start0} ms`);
      resolve();
    });
  });

export default SciFiBookLoader;
