import MysteryAward from "../artifact/MysteryAward.js";

import NomineeFetcher from "./SYKMNomineeFetcher.js";

QUnit.module("SYKMNomineeFetcher");

QUnit.test("receiveData() Agatha", function(assert)
{
   // Setup.
   var award = MysteryAward.properties[MysteryAward.AGATHA];
   var callback = function(books, bookToNomination)
   {
      assert.ok(books);
      assert.equal(books.length, 15);

      var i = 0;
      assert.equal(books[i].title(), "A Great Reckoning");
      assert.equal(books[i].author(), "Louise Penny");
      var nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      var j = 0;
      assert.equal(nominations[j].award(), award);
      var category = award.categories.properties[award.categories.CONTEMPORARY];
      assert.equal(nominations[j].category(), category);
      assert.equal(nominations[j].year(), 2016);
      assert.ok(nominations[j].isWinner());

      i = books.length - 1;
      assert.equal(books[i].title(), "Design for Dying");
      assert.equal(books[i].author(), "Renee Patrick");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award(), award);
      category = award.categories.properties[award.categories.FIRST];
      assert.equal(nominations[j].category(), category);
      assert.equal(nominations[j].year(), 2016);
      assert.ok(!nominations[j].isWinner());
   };
   var fetcher = new NomineeFetcher(award, callback);
   var xmlDocument = load(award.name);

   // Run.
   fetcher.receiveData(xmlDocument);

   // Verify.
   assert.ok(true);
});

QUnit.test("receiveData() Anthony", function(assert)
{
   // Setup.
   var award = MysteryAward.properties[MysteryAward.ANTHONY];
   var callback = function(books, bookToNomination)
   {
      assert.ok(books);
      assert.equal(books.length, 11);

      var i = 0;
      assert.equal(books[i].title(), "You Will Know Me");
      assert.equal(books[i].author(), "Megan Abbott");
      var nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      var j = 0;
      assert.equal(nominations[j].award(), award);
      var category = award.categories.properties[award.categories.MYSTERY];
      assert.equal(nominations[j].category(), category);
      assert.equal(nominations[j].year(), 2017);

      i = books.length - 1;
      assert.equal(books[i].title(), "Heart of Stone");
      assert.equal(books[i].author(), "James W. Ziskin");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award(), award);
      category = award.categories.properties[award.categories.PAPERBACK];
      assert.equal(nominations[j].category(), category);
      assert.equal(nominations[j].year(), 2017);
   };
   var fetcher = new NomineeFetcher(award, callback);
   var xmlDocument = load(award.name);

   // Run.
   fetcher.receiveData(xmlDocument);

   // Verify.
   assert.ok(true);
});

QUnit.test("receiveData() Barry", function(assert)
{
   // Setup.
   var award = MysteryAward.properties[MysteryAward.BARRY];
   var callback = function(books, bookToNomination)
   {
      assert.ok(books);
      assert.equal(books.length, 24);

      var i = 0;
      assert.equal(books[i].title(), "Where It Hurts");
      assert.equal(books[i].author(), "Reed Farrel Coleman");
      var nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      var j = 0;
      assert.equal(nominations[j].award(), award);
      var category = award.categories.properties[award.categories.NOVEL];
      assert.equal(nominations[j].category(), category);
      assert.equal(nominations[j].year(), 2017);

      i = books.length - 1;
      assert.equal(books[i].title(), "Collecting the Dead");
      assert.equal(books[i].author(), "Spencer Kope");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award(), award);
      category = award.categories.properties[award.categories.THRILLER];
      assert.equal(nominations[j].category(), category);
      assert.equal(nominations[j].year(), 2017);
   };
   var fetcher = new NomineeFetcher(award, callback);
   var xmlDocument = load(award.name);

   // Run.
   fetcher.receiveData(xmlDocument);

   // Verify.
   assert.ok(true);
});

QUnit.test("receiveData() Dagger", function(assert)
{
   // Setup.
   var award = MysteryAward.properties[MysteryAward.DAGGER];
   var callback = function(books, bookToNomination)
   {
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
   };
   var fetcher = new NomineeFetcher(award, callback);
   var xmlDocument = load(award.name);

   // Run.
   fetcher.receiveData(xmlDocument);

   // Verify.
   assert.ok(true);
});

QUnit.test("receiveData() Edgar", function(assert)
{
   // Setup.
   var award = MysteryAward.properties[MysteryAward.EDGAR];
   var callback = function(books, bookToNomination)
   {
      assert.ok(books);
      assert.equal(books.length, 17);

      var i = 0;
      assert.equal(books[i].title(), "Before the Fall");
      assert.equal(books[i].author(), "Noah Hawley");
      var nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      var j = 0;
      assert.equal(nominations[j].award(), award);
      var category = award.categories.properties[award.categories.NOVEL];
      assert.equal(nominations[j].category(), category);
      assert.equal(nominations[j].year(), 2017);

      i = books.length - 1;
      assert.equal(books[i].title(), "Heart of Stone");
      assert.equal(books[i].author(), "James W. Ziskin");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award(), award);
      category = award.categories.properties[award.categories.PAPERBACK];
      assert.equal(nominations[j].category(), category);
      assert.equal(nominations[j].year(), 2017);
   };
   var fetcher = new NomineeFetcher(award, callback);
   var xmlDocument = load(award.name);

   // Run.
   fetcher.receiveData(xmlDocument);

   // Verify.
   assert.ok(true);
});

QUnit.skip("receiveData() Nero", function(assert)
{
   // Setup.
   var award = MysteryAward.properties[MysteryAward.NERO];
   var callback = function(books, bookToNomination)
   {
      assert.ok(books);
      assert.equal(books.length, 15);

      var i = 0;
      assert.equal(books[i].title(), "Long Upon the Land");
      assert.equal(books[i].author(), "Margaret Maron");
      var nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      var j = 0;
      assert.equal(nominations[j].award(), award);
      var category = award.categories.properties[award.categories.CONTEMPORARY];
      assert.equal(nominations[j].category(), category);
      assert.equal(nominations[j].year(), 2015);

      i = books.length - 1;
      assert.equal(books[i].title(), "Just Killing Time");
      assert.equal(books[i].author(), "Julianne Holmes");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award(), award);
      category = award.categories.properties[award.categories.FIRST];
      assert.equal(nominations[j].category(), category);
      assert.equal(nominations[j].year(), 2015);
   };
   var fetcher = new NomineeFetcher(award, callback);
   var xmlDocument = load(award.name);

   // Run.
   fetcher.receiveData(xmlDocument);

   // Verify.
   assert.ok(true);
});

QUnit.test("receiveData() Shamus", function(assert)
{
   // Setup.
   var award = MysteryAward.properties[MysteryAward.SHAMUS];
   var callback = function(books, bookToNomination)
   {
      assert.ok(books);
      assert.equal(books.length, 15);

      var i = 0;
      assert.equal(books[i].title(), "Where It Hurts");
      assert.equal(books[i].author(), "Reed Farrel Coleman");
      var nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      var j = 0;
      assert.equal(nominations[j].award(), award);
      var category = award.categories.properties[award.categories.HARDCOVER];
      assert.equal(nominations[j].category(), category);
      assert.equal(nominations[j].year(), 2017);

      i = books.length - 1;
      assert.equal(books[i].title(), "SoHo Sins");
      assert.equal(books[i].author(), "Richard Vine");
      nominations = bookToNomination[books[i]];
      assert.ok(nominations);
      assert.equal(nominations.length, 1);
      j = 0;
      assert.equal(nominations[j].award(), award);
      category = award.categories.properties[award.categories.FIRST];
      assert.equal(nominations[j].category(), category);
      assert.equal(nominations[j].year(), 2017);
   };
   var fetcher = new NomineeFetcher(award, callback);
   var xmlDocument = load(award.name);

   // Run.
   fetcher.receiveData(xmlDocument);

   // Verify.
   assert.ok(true);
});

function load(name)
{
   var request = new XMLHttpRequest();
   var url = "../resource/testdoc/" + name + ".xml";
   LOGGER.debug("url = " + url);
   var isAsync = false;
   request.open("GET", url, isAsync);
   request.send();

   return request.responseXML;
}

var SYKMNomineeFetcherTest = {};
export default SYKMNomineeFetcherTest;