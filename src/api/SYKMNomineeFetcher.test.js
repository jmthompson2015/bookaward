import MysteryAward from "../artifact/MysteryAward.js";

import SYKMNomineeFetcher from "./SYKMNomineeFetcher.js";

QUnit.module("SYKMNomineeFetcher");

QUnit.test("fetchData() Agatha", function(assert)
{
   // Setup.
   const award = MysteryAward.properties[MysteryAward.AGATHA];
   const callback = function(books, bookToNomination)
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(books);
      assert.equal(books.length, 15);

      let i = 0;
      assert.equal(books[i].title, "Glass Houses");
      assert.equal(books[i].author, "Louise Penny");
      let nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      let j = 0;
      assert.equal(nominations[j].award, award);
      let category = award.categories.properties[award.categories.CONTEMPORARY];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2017);
      assert.ok(nominations[j].isWinner);

      i = books.length - 1;
      assert.equal(books[i].title, "Protocol");
      assert.equal(books[i].author, "Kathleen Valenti");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award, award);
      category = award.categories.properties[award.categories.FIRST];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2017);
      assert.ok(!nominations[j].isWinner);
      done();
   };
   const fetcher = new SYKMNomineeFetcher(award, callback);

   // Run.
   const done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() Anthony", function(assert)
{
   // Setup.
   const award = MysteryAward.properties[MysteryAward.ANTHONY];
   const callback = function(books, bookToNomination)
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(books);
      assert.equal(books.length, 11);

      let i = 0;
      assert.equal(books[i].title, "A Great Reckoning");
      assert.equal(books[i].author, "Louise Penny");
      let nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      let j = 0;
      assert.equal(nominations[j].award, award);
      let category = award.categories.properties[award.categories.MYSTERY];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2017);

      i = books.length - 1;
      assert.equal(books[i].title, "How To Kill Friends and Implicate People");
      assert.equal(books[i].author, "Jay Stringer");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award, award);
      category = award.categories.properties[award.categories.PAPERBACK];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2017);
      done();
   };
   const fetcher = new SYKMNomineeFetcher(award, callback);

   // Run.
   const done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() Barry", function(assert)
{
   // Setup.
   const award = MysteryAward.properties[MysteryAward.BARRY];
   const callback = function(books, bookToNomination)
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(books);
      assert.equal(books.length, 24);

      let i = 0;
      assert.equal(books[i].title, "The Late Show");
      assert.equal(books[i].author, "Michael Connelly");
      let nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      let j = 0;
      assert.equal(nominations[j].award, award);
      let category = award.categories.properties[award.categories.NOVEL];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2018);

      i = books.length - 1;
      assert.equal(books[i].title, "The Old Man");
      assert.equal(books[i].author, "Thomas Perry");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award, award);
      category = award.categories.properties[award.categories.THRILLER];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2018);
      done();
   };
   const fetcher = new SYKMNomineeFetcher(award, callback);

   // Run.
   const done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() Dagger", function(assert)
{
   // Setup.
   const award = MysteryAward.properties[MysteryAward.DAGGER];
   const callback = function(books, bookToNomination)
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(books);
      assert.equal(books.length, 28);

      let i = 0;
      assert.equal(books[i].title, "The Dry");
      assert.equal(books[i].author, "Jane Harper");
      let nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      let j = 0;
      assert.equal(nominations[j].award, award);
      let category = award.categories.properties[award.categories.GOLD];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2017);
      assert.ok(nominations[j].isWinner);

      i = books.length - 1;
      assert.equal(books[i].title, "A Climate of Fear");
      assert.equal(books[i].author, "Fred Vargas");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award, award);
      category = award.categories.properties[award.categories.INTERNATIONAL];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2017);
      assert.ok(!nominations[j].isWinner);
      done();
   };
   const fetcher = new SYKMNomineeFetcher(award, callback);

   // Run.
   const done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() Edgar", function(assert)
{
   // Setup.
   const award = MysteryAward.properties[MysteryAward.EDGAR];
   const callback = function(books, bookToNomination)
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(books);
      assert.equal(books.length, 16);

      let i = 0;
      assert.equal(books[i].title, "Bluebird, Bluebird");
      assert.equal(books[i].author, "Attica Locke");
      let nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      let j = 0;
      assert.equal(nominations[j].award, award);
      let category = award.categories.properties[award.categories.NOVEL];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2018);

      i = books.length - 1;
      assert.equal(books[i].title, "The Rules of Backyard Cricket");
      assert.equal(books[i].author, "Jock Serong");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award, award);
      category = award.categories.properties[award.categories.PAPERBACK];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2018);
      done();
   };
   const fetcher = new SYKMNomineeFetcher(award, callback);

   // Run.
   const done = assert.async();
   fetcher.fetchData();
});

QUnit.skip("fetchData() Nero", function(assert)
{
   // Setup.
   const award = MysteryAward.properties[MysteryAward.NERO];
   const callback = function(books, bookToNomination)
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(books);
      assert.equal(books.length, 15);

      let i = 0;
      assert.equal(books[i].title, "Long Upon the Land");
      assert.equal(books[i].author, "Margaret Maron");
      let nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      let j = 0;
      assert.equal(nominations[j].award, award);
      let category = award.categories.properties[award.categories.CONTEMPORARY];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2015);

      i = books.length - 1;
      assert.equal(books[i].title, "Just Killing Time");
      assert.equal(books[i].author, "Julianne Holmes");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award, award);
      category = award.categories.properties[award.categories.FIRST];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2015);
      done();
   };
   const fetcher = new SYKMNomineeFetcher(award, callback);

   // Run.
   const done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() Shamus", function(assert)
{
   // Setup.
   const award = MysteryAward.properties[MysteryAward.SHAMUS];
   const callback = function(books, bookToNomination)
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(books);
      assert.equal(books.length, 15);

      let i = 0;
      assert.equal(books[i].title, "Where It Hurts");
      assert.equal(books[i].author, "Reed Farrel Coleman");
      let nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      let j = 0;
      assert.equal(nominations[j].award, award);
      let category = award.categories.properties[award.categories.HARDCOVER];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2017);

      i = books.length - 1;
      assert.equal(books[i].title, "SoHo Sins");
      assert.equal(books[i].author, "Richard Vine");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award, award);
      category = award.categories.properties[award.categories.FIRST];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2017);
      done();
   };
   const fetcher = new SYKMNomineeFetcher(award, callback);

   // Run.
   const done = assert.async();
   fetcher.fetchData();
});

const SYKMNomineeFetcherTest = {};
export default SYKMNomineeFetcherTest;