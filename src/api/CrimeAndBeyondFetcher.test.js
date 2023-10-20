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
    const length = 43;
    assert.equal(books.length, length);

    const bookFirst = R.head(books);
    assert.equal(bookFirst.title, "The Eighth Detective");
    assert.equal(bookFirst.author, "Alex Pavesi");
    let nominations = bookToNomination[bookFirst];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    const nomination0 = R.head(nominations);
    assert.equal(nomination0.award, award);
    assert.equal(nomination0.category, category);
    assert.equal(nomination0.year, 2021);
    assert.equal(nomination0.isWinner, true);

    const bookLast = R.last(books);
    assert.equal(bookLast.title, "The Man with a Load of Mischief");
    assert.equal(bookLast.author, "Martha Grimes");
    nominations = bookToNomination[bookLast];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    const nomination1 = R.head(nominations);
    assert.equal(nomination1.award, award);
    assert.equal(nomination1.category, category);
    assert.equal(nomination1.year, 2024);
    assert.equal(nomination1.isWinner, true);
    done();
  };
  const fetcher = new CrimeAndBeyondFetcher();

  // Run.
  fetcher.fetchData().then(callback);
});

const CrimeAndBeyondFetcherTest = {};
export default CrimeAndBeyondFetcherTest;
