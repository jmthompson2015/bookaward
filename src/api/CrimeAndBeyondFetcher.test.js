import MysteryAward from "../artifact/MysteryAward.js";

import CrimeAndBeyondFetcher from "./CrimeAndBeyondFetcher.js";

QUnit.module("CrimeAndBeyondFetcher");

QUnit.test("receiveData()", assert => {
  // Setup.
  const award = MysteryAward.properties[MysteryAward.CRIME_AND_BEYOND];
  const category = award.categories.properties[award.categories.CASE];
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(books);
    const length = 24;
    assert.equal(books.length, length);

    let i = 0;
    assert.equal(books[i].title, "The Nowhere Man");
    assert.equal(books[i].author, "Gregg Hurwitz");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2017);
    assert.equal(nominations[j].isWinner, false);

    i = length - 1;
    assert.equal(books[i].title, "Lethal White");
    assert.equal(books[i].author, "Robert Galbraith");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2019);
    assert.equal(nominations[j].isWinner, false);
    done();
  };
  const fetcher = new CrimeAndBeyondFetcher();

  // Run.
  fetcher.fetchData().then(callback);
});

const CrimeAndBeyondFetcherTest = {};
export default CrimeAndBeyondFetcherTest;
