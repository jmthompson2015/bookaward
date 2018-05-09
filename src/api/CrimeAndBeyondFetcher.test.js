import MysteryAward from "../artifact/MysteryAward.js";

import CrimeAndBeyondFetcher from "./CrimeAndBeyondFetcher.js";

QUnit.module("CrimeAndBeyondFetcher");

QUnit.test("receiveData()", function(assert)
{
   // Setup.
   const award = MysteryAward.properties[MysteryAward.CRIME_AND_BEYOND];
   const category = award.categories.properties[award.categories.CASE];
   const callback = function(books, bookToNomination)
   {
      assert.ok(books);
      const length = 24;
      assert.equal(books.length, length);

      let i = 0;
      assert.equal(books[i].title, "The Crossing");
      assert.equal(books[i].author, "Michael Connelly");
      let nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      let j = 0;
      assert.equal(nominations[j].award, award);
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2016);
      assert.equal(nominations[j].isWinner, false);

      i = 5;
      assert.equal(books[i].title, "Fool Me Once");
      assert.equal(books[i].author, "Harlan Coben");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award, award);
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2017);
      assert.equal(nominations[j].isWinner, false);

      i = length - 1;
      assert.equal(books[i].title, "Two Kinds of Truth");
      assert.equal(books[i].author, "Michael Connelly");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award, award);
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2018);
      assert.equal(nominations[j].isWinner, false);
   };
   const fetcher = new CrimeAndBeyondFetcher(callback);

   // Run.
   fetcher.receiveData();

   // Verify.
   assert.ok(true);
});

const CrimeAndBeyondFetcherTest = {};
export default CrimeAndBeyondFetcherTest;