import MysteryAward from "../artifact/MysteryAward.js";

import SYKMNomineeFetcher from "./SYKMNomineeFetcher.js";

QUnit.module("SYKMNomineeFetcher0");

QUnit.test("fetchData() Agatha", function(assert)
{
   // Setup.
   var award = MysteryAward.properties[MysteryAward.AGATHA];
   var callback = function(books, bookToNomination)
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(books);
      assert.equal(books.length, 15);

      var i = 0;
      assert.equal(books[i].title(), "Glass Houses");
      assert.equal(books[i].author(), "Louise Penny");
      var nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      var j = 0;
      assert.equal(nominations[j].award(), award);
      var category = award.categories.properties[award.categories.CONTEMPORARY];
      assert.equal(nominations[j].category(), category);
      assert.equal(nominations[j].year(), 2017);
      assert.ok(nominations[j].isWinner());

      i = books.length - 1;
      assert.equal(books[i].title(), "Protocol");
      assert.equal(books[i].author(), "Kathleen Valenti");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award(), award);
      category = award.categories.properties[award.categories.FIRST];
      assert.equal(nominations[j].category(), category);
      assert.equal(nominations[j].year(), 2017);
      assert.ok(!nominations[j].isWinner());
      done();
   };
   var fetcher = new SYKMNomineeFetcher(award, callback);

   // Run.
   var done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() Anthony", function(assert)
{
   // Setup.
   var award = MysteryAward.properties[MysteryAward.ANTHONY];
   var callback = function( /* books, bookToNomination */ )
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      done();
   };
   var fetcher = new SYKMNomineeFetcher(award, callback);

   // Run.
   var done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() Barry", function(assert)
{
   // Setup.
   var award = MysteryAward.properties[MysteryAward.BARRY];
   var callback = function( /* books, bookToNomination */ )
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      done();
   };
   var fetcher = new SYKMNomineeFetcher(award, callback);

   // Run.
   var done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() Dagger", function(assert)
{
   // Setup.
   var award = MysteryAward.properties[MysteryAward.DAGGER];
   var callback = function(books, bookToNomination)
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(books);
      assert.equal(books.length, 28);

      var i = 0;
      assert.equal(books[i].title(), "The Dry");
      assert.equal(books[i].author(), "Jane Harper");
      var nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      var j = 0;
      assert.equal(nominations[j].award(), award);
      var category = award.categories.properties[award.categories.GOLD];
      assert.equal(nominations[j].category(), category);
      assert.equal(nominations[j].year(), 2017);
      assert.ok(nominations[j].isWinner());

      i = books.length - 1;
      assert.equal(books[i].title(), "A Climate of Fear");
      assert.equal(books[i].author(), "Fred Vargas");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award(), award);
      category = award.categories.properties[award.categories.INTERNATIONAL];
      assert.equal(nominations[j].category(), category);
      assert.equal(nominations[j].year(), 2017);
      assert.ok(!nominations[j].isWinner());
      done();
   };
   var fetcher = new SYKMNomineeFetcher(award, callback);

   // Run.
   var done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() Edgar", function(assert)
{
   // Setup.
   var award = MysteryAward.properties[MysteryAward.EDGAR];
   var callback = function( /* books, bookToNomination */ )
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      done();
   };
   var fetcher = new SYKMNomineeFetcher(award, callback);

   // Run.
   var done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() Shamus", function(assert)
{
   // Setup.
   var award = MysteryAward.properties[MysteryAward.SHAMUS];
   var callback = function(books /*, bookToNomination */ )
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(books);
      assert.equal(books.length, 15);
      done();
   };
   var fetcher = new SYKMNomineeFetcher(award, callback);

   // Run.
   var done = assert.async();
   fetcher.fetchData();
});

var SYKMNomineeFetcher0Test = {};
export default SYKMNomineeFetcher0Test;