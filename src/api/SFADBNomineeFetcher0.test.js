import SciFiAward from "../artifact/SciFiAward.js";

import NomineeFetcher from "./SFADBNomineeFetcher.js";

QUnit.module("SFADBNomineeFetcher0");

QUnit.test("fetchData() British Fantasy", function(assert)
{
   // Setup.
   var award = SciFiAward.properties[SciFiAward.BRITISH_FANTASY];
   var year = 2016;
   var callback = function(books, bookToNomination)
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(books);
      assert.equal(books.length, 12);

      var i = 0;
      assert.equal(books[i].title(), "Uprooted");
      assert.equal(books[i].author(), "Naomi Novik");
      var nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      var j = 0;
      assert.equal(nominations[j].award(), award);
      var category = award.categories.properties[award.categories.FANTASY];
      assert.equal(nominations[j].category(), category);
      assert.equal(nominations[j].year(), 2016);
      assert.ok(nominations[j].isWinner());

      i = books.length - 1;
      assert.equal(books[i].title(), "Welcome to Night Vale");
      assert.equal(books[i].author(), "Joseph Fink & Jeffrey Cranor");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award(), award);
      category = award.categories.properties[award.categories.HORROR];
      assert.equal(nominations[j].category(), category);
      assert.equal(nominations[j].year(), 2016);
      assert.ok(!nominations[j].isWinner());
      done();
   };
   var fetcher = new NomineeFetcher(award, year, callback);

   // Run.
   var done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() British SF", function(assert)
{
   // Setup.
   var award = SciFiAward.properties[SciFiAward.BRITISH_SF];
   var year = 2016;
   var callback = function( /* books, bookToNomination */ )
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      done();
   };
   var fetcher = new NomineeFetcher(award, year, callback);

   // Run.
   var done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() Hugo", function(assert)
{
   // Setup.
   var award = SciFiAward.properties[SciFiAward.HUGO];
   var year = 2016;
   var callback = function( /* books, bookToNomination */ )
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      done();
   };
   var fetcher = new NomineeFetcher(award, year, callback);

   // Run.
   var done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() Locus", function(assert)
{
   // Setup.
   var award = SciFiAward.properties[SciFiAward.LOCUS];
   var year = 2016;
   var callback = function( /* books, bookToNomination */ )
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      done();
   };
   var fetcher = new NomineeFetcher(award, year, callback);

   // Run.
   var done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() Nebula", function(assert)
{
   // Setup.
   var award = SciFiAward.properties[SciFiAward.NEBULA];
   var year = 2016;
   var callback = function( /* books, bookToNomination */ )
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      done();
   };
   var fetcher = new NomineeFetcher(award, year, callback);

   // Run.
   var done = assert.async();
   fetcher.fetchData();
});

var SFADBNomineeFetcher0Test = {};
export default SFADBNomineeFetcher0Test;