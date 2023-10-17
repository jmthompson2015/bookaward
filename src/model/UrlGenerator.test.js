import Library from "../artifact/Library.js";
import MysteryAward from "../artifact/MysteryAward.js";

import UrlGenerator from "./UrlGenerator.js";

QUnit.module("UrlGenerator");

QUnit.test("createAmazonSearchUrl()", (assert) => {
  // Setup.
  const subject = "something";

  // Run.
  const result = UrlGenerator.createAmazonSearchUrl(subject);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    "http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=something",
  );
});

QUnit.test("createAwardUrl()", (assert) => {
  // Setup.
  const award = MysteryAward.properties[MysteryAward.AGATHA];
  const year = 2021;

  // Run.
  const result = UrlGenerator.createAwardUrl(award, year);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    "http://stopyourekillingme.com/Awards/Agatha_Awards.html",
  );
});

QUnit.test("createGoodreadsSearchUrl()", (assert) => {
  // Setup.
  const subject = "something";

  // Run.
  const result = UrlGenerator.createGoodreadsSearchUrl(subject);

  // Verify.
  assert.ok(result);
  assert.equal(result, "http://www.goodreads.com/search?q=something");
});

QUnit.test("createLibrarySearchUrl()", (assert) => {
  // Setup.
  const library = Library.properties[Library.DCL];
  const subject = "something";

  // Run.
  const result = UrlGenerator.createLibrarySearchUrl(library, subject);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    "http://dcl.bibliocommons.com/search?q=something&t=smart&search_category=keyword",
  );
});

QUnit.test("createWikipediaSearchUrl()", (assert) => {
  // Setup.
  const subject = "something";

  // Run.
  const result = UrlGenerator.createWikipediaSearchUrl(subject);

  // Verify.
  assert.ok(result);
  assert.equal(result, "http://en.wikipedia.org/wiki/something");
});

const UrlGeneratorTest = {};
export default UrlGeneratorTest;
