/* eslint no-console: ["error", { allow: ["info"] }] */

import MysteryAward from "../artifact/MysteryAward.js";

import CrimeAndBeyondFetcher from "../api/CrimeAndBeyondFetcher.js";
import SYKMNomineeFetcher from "../api/SYKMNomineeFetcher.js";

import Action from "./Action.js";

const MysteryBookLoader = {};

MysteryBookLoader.load = (store) =>
  new Promise((resolve) => {
    const start0 = Date.now();
    const receiveCollection = ({ books, bookToNomination }) => {
      if (books.length > 0) {
        store.dispatch(Action.addBooks(books));
        store.dispatch(Action.addBookToNomination(bookToNomination));
      }
    };
    const mapFunction = (award) => {
      const fetcher =
        award.key === MysteryAward.CRIME_AND_BEYOND
          ? new CrimeAndBeyondFetcher()
          : new SYKMNomineeFetcher(award);

      return fetcher.fetchData().then(receiveCollection);
    };
    const promises = R.map(mapFunction, MysteryAward.values());

    Promise.allSettled(promises).then(() => {
      const end0 = Date.now();
      console.info(`MysteryBookLoader.load() elapsed: ${end0 - start0} ms`);
      resolve();
    });
  });

export default MysteryBookLoader;
