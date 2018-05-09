import SciFiAward from "../artifact/SciFiAward.js";

import NomineeFetcher from "./SFADBNomineeFetcher.js";

QUnit.module("SFADBNomineeFetcher");

QUnit.test("fetchData() British Fantasy", function(assert)
{
   // Setup.
   const award = SciFiAward.properties[SciFiAward.BRITISH_FANTASY];
   const year = 2016;
   const callback = function(books, bookToNomination)
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(books);
      assert.equal(books.length, 12);

      let i = 0;
      assert.equal(books[i].title, "Uprooted");
      assert.equal(books[i].author, "Naomi Novik");
      let nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      let j = 0;
      assert.equal(nominations[j].award, award);
      let category = award.categories.properties[award.categories.FANTASY];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2016);
      assert.ok(nominations[j].isWinner);

      i = books.length - 1;
      assert.equal(books[i].title, "Welcome to Night Vale");
      assert.equal(books[i].author, "Joseph Fink & Jeffrey Cranor");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award, award);
      category = award.categories.properties[award.categories.HORROR];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2016);
      assert.ok(!nominations[j].isWinner);
      done();
   };
   const fetcher = new NomineeFetcher(award, year, callback);

   // Run.
   const done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() British SF", function(assert)
{
   // Setup.
   const award = SciFiAward.properties[SciFiAward.BRITISH_SF];
   const year = 2016;
   const callback = function(books, bookToNomination)
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(books);
      assert.equal(books.length, 5);

      let i = 0;
      assert.equal(books[i].title, "The House of Shattered Wings");
      assert.equal(books[i].author, "Aliette de Bodard");
      let nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      let j = 0;
      assert.equal(nominations[j].award, award);
      const category = award.categories.properties[award.categories.NOVEL];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2016);
      assert.ok(nominations[j].isWinner);

      i = books.length - 1;
      assert.equal(books[i].title, "Mother of Eden");
      assert.equal(books[i].author, "Chris Beckett");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award, award);
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2016);
      assert.ok(!nominations[j].isWinner);
      done();
   };
   const fetcher = new NomineeFetcher(award, year, callback);

   // Run.
   const done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() Hugo", function(assert)
{
   // Setup.
   const award = SciFiAward.properties[SciFiAward.HUGO];
   const year = 2016;
   const callback = function(books, bookToNomination)
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(books);
      assert.equal(books.length, 5);

      let i = 0;
      assert.equal(books[i].title, "The Fifth Season");
      assert.equal(books[i].author, "N. K. Jemisin");
      let nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      let j = 0;
      assert.equal(nominations[j].award, award);
      const category = award.categories.properties[award.categories.NOVEL];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2016);
      assert.ok(nominations[j].isWinner);

      i = books.length - 1;
      assert.equal(books[i].title, "Uprooted");
      assert.equal(books[i].author, "Naomi Novik");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award, award);
      // category = award.categories.properties[award.categories.FIRST];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2016);
      assert.ok(!nominations[j].isWinner);
      done();
   };
   const fetcher = new NomineeFetcher(award, year, callback);

   // Run.
   const done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() Locus", function(assert)
{
   // Setup.
   const award = SciFiAward.properties[SciFiAward.LOCUS];
   const year = 2016;
   const callback = function(books, bookToNomination)
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(books);
      assert.equal(books.length, 15);

      let i = 0;
      assert.equal(books[i].title, "Ancillary Mercy");
      assert.equal(books[i].author, "Ann Leckie");
      let nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      let j = 0;
      assert.equal(nominations[j].award, award);
      let category = award.categories.properties[award.categories.SF];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2016);

      i = books.length - 1;
      assert.equal(books[i].title, "The Watchmaker of Filigree Street");
      assert.equal(books[i].author, "Natasha Pulley");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award, award);
      category = award.categories.properties[award.categories.FIRST];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2016);
      done();
   };
   const fetcher = new NomineeFetcher(award, year, callback);

   // Run.
   const done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() Nebula", function(assert)
{
   // Setup.
   const award = SciFiAward.properties[SciFiAward.NEBULA];
   const year = 2016;
   const callback = function(books, bookToNomination)
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(books);
      assert.equal(books.length, 7);

      let i = 0;
      assert.equal(books[i].title, "Uprooted");
      assert.equal(books[i].author, "Naomi Novik");
      let nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      let j = 0;
      assert.equal(nominations[j].award, award);
      const category = award.categories.properties[award.categories.NOVEL];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2016);

      i = books.length - 1;
      assert.equal(books[i].title, "Updraft");
      assert.equal(books[i].author, "Fran Wilde");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award, award);
      // category = award.categories.properties[award.categories.PAPERBACK];
      assert.equal(nominations[j].category, category);
      assert.equal(nominations[j].year, 2016);
      done();
   };
   const fetcher = new NomineeFetcher(award, year, callback);

   // Run.
   const done = assert.async();
   fetcher.fetchData();
});

const SFADBNomineeFetcherTest = {};
export default SFADBNomineeFetcherTest;