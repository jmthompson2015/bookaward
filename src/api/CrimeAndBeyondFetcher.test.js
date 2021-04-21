import MysteryAward from "../artifact/MysteryAward.js";

import CrimeAndBeyondFetcher from "./CrimeAndBeyondFetcher.js";

QUnit.module("CrimeAndBeyondFetcher");

QUnit.test("receiveData()", (assert) => {
  // Setup.
  const award = MysteryAward.properties[MysteryAward.CRIME_AND_BEYOND];
  const category = award.categories.properties[award.categories.CASE];
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(books);
    const length = 36;
    assert.equal(books.length, length);

    const bookFirst = R.head(books);
    assert.equal(bookFirst.title, "The Fallen");
    assert.equal(bookFirst.author, "David Baldacci");
    let nominations = bookToNomination[bookFirst];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    const nomination0 = R.head(nominations);
    assert.equal(nomination0.award, award);
    assert.equal(nomination0.category, category);
    assert.equal(nomination0.year, 2019);
    assert.equal(nomination0.isWinner, false);

    const bookLast = R.last(books);
    assert.equal(bookLast.title, "Tied Up in Tinsel");
    assert.equal(bookLast.author, "Ngaio Marsh");
    nominations = bookToNomination[bookLast];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    const nomination1 = R.head(nominations);
    assert.equal(nomination1.award, award);
    assert.equal(nomination1.category, category);
    assert.equal(nomination1.year, 2021);
    assert.equal(nomination1.isWinner, false);
    done();
  };
  const fetcher = new CrimeAndBeyondFetcher();

  // Run.
  fetcher.fetchData().then(callback);
});

const CrimeAndBeyondFetcherTest = {};
export default CrimeAndBeyondFetcherTest;
