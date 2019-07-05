/* eslint no-console: ["error", { allow: ["debug","warn"] }] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_book"] }] */

import Library from "../artifact/Library.js";

import UrlGenerator from "../model/UrlGenerator.js";

import FetchUtilities from "./FetchUtilities.js";

const BASE_URL = "https://dcl.bibliocommons.com";

class DCLURLFetcher {
  constructor(book) {
    this._book = book;
  }

  get book() {
    return this._book;
  }

  createUrl() {
    const library = Library.properties[Library.DCL];
    const subject = this.book.toString();

    return UrlGenerator.createLibrarySearchUrl(library, subject);
  }

  fetchData() {
    return new Promise(resolve => {
      const receiveData = htmlDocument => {
        const dclUrl = this.parse(htmlDocument);
        resolve({ book: this.book, dclUrl });
      };

      const url = this.createUrl();
      const options = {};
      FetchUtilities.fetchRetry(url, options, 3)
        .then(response => response.text())
        .then(receiveData);
    });
  }

  parse(htmlDocument) {
    let dclUrl;

    const key0 = '<span class="icon icon-book-open"';
    const index0 = htmlDocument.indexOf(key0);

    if (index0 >= 0) {
      const key1 = '<a href="';
      const index1 = htmlDocument.indexOf(key1, index0 + key0.length);

      if (index1 >= 0) {
        const key2 = '"';
        const index2 = htmlDocument.indexOf(key2, index1 + key1.length);

        if (index2 >= 0) {
          dclUrl = BASE_URL + htmlDocument.substring(index1 + key1.length, index2).trim();
        }
      }
    }

    if (dclUrl === undefined) {
      console.warn(`missing row for book = ${this.book}`);
    }

    return dclUrl;
  }
}

export default DCLURLFetcher;
