import Library from "../artifact/Library.js";
import SciFiAward from "../artifact/SciFiAward.js";

const UrlGenerator = {
  createAmazonSearchUrl(subject) {
    const searchString = subject.replace(/ /g, "+");

    return `http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=${searchString}`;
  },

  createAwardUrl(award, year) {
    let answer = award.url;

    if (SciFiAward.keys().includes(award.key)) {
      answer += year;
    }

    return answer;
  },

  createGoodreadsSearchUrl(subject) {
    const searchString = subject.replace(/ /g, "+");

    return `http://www.goodreads.com/search?q=${searchString}`;
  },

  createLibrarySearchUrl(library, subject) {
    let searchString = subject;

    searchString = searchString.replace(/\u00EE/g, "i");
    searchString = searchString.replace(/\u00F8/g, "o");
    searchString = searchString.replace(/\u2019/g, "");
    searchString = searchString.replace(/'/g, "");

    switch (library.key) {
      case Library.DCL:
        searchString = searchString.replace(/ /g, "+");
        break;
      default:
        searchString = searchString.replace(/ /g, "%20");
        break;
    }

    return library.searchPrefix + searchString + library.searchSuffix;
  },

  createWikipediaSearchUrl(subject) {
    const searchString = subject.replace(/ /g, "_");

    return `http://en.wikipedia.org/wiki/${searchString}`;
  },
};

export default UrlGenerator;
