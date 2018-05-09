import Book from "../model/Book.js";

import DCLURLFetcher from "./DCLURLFetcher.js";

QUnit.module("DCLURLFetcher");

QUnit.test("fetchData() 0", function(assert)
{
   // Setup.
   var book = createBook0();
   var callback = function(book, dclUrl)
   {
      // Verify.
      assert.ok(book);
      assert.ok(dclUrl);
      assert.equal(dclUrl, "https://dcl.bibliocommons.com/item/show/1337567114");
      done();
   };
   var fetcher = new DCLURLFetcher(book, callback);

   // Run.
   var done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() 1", function(assert)
{
   // Setup.
   var book = createBook1();
   var callback = function(book, dclUrl)
   {
      // Verify.
      assert.ok(book);
      assert.equal(dclUrl, undefined);
      done();
   };
   var fetcher = new DCLURLFetcher(book, callback);

   // Run.
   var done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() 2", function(assert)
{
   // Setup.
   var book = createBook2();
   var callback = function(book, dclUrl)
   {
      // Verify.
      assert.ok(book);
      assert.ok(dclUrl);
      assert.equal(dclUrl, "https://dcl.bibliocommons.com/item/show/1268318114");
      done();
   };
   var fetcher = new DCLURLFetcher(book, callback);

   // Run.
   var done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() 3", function(assert)
{
   // Setup.
   var book = createBook3();
   var callback = function(book, dclUrl)
   {
      // Verify.
      assert.ok(book);
      assert.ok(dclUrl);
      assert.equal(dclUrl, "https://dcl.bibliocommons.com/item/show/1431233114");
      done();
   };
   var fetcher = new DCLURLFetcher(book, callback);

   // Run.
   var done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() 4", function(assert)
{
   // Setup.
   var book = createBook4();
   var callback = function(book, dclUrl)
   {
      // Verify.
      assert.ok(book);
      assert.equal(dclUrl, undefined);
      done();
   };
   var fetcher = new DCLURLFetcher(book, callback);

   // Run.
   var done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() 5", function(assert)
{
   // Setup.
   var book = createBook5();
   var callback = function(book, dclUrl)
   {
      // Verify.
      assert.ok(book);
      assert.ok(dclUrl);
      assert.equal(dclUrl, "https://dcl.bibliocommons.com/item/show/1309150114");
      done();
   };
   var fetcher = new DCLURLFetcher(book, callback);

   // Run.
   var done = assert.async();
   fetcher.fetchData();
});

function createBook0()
{
   var title = "The Wrong Side of Goodbye";
   var author = "Michael Connelly";

   return new Book(title, author);
}

function createBook1()
{
   var title = "Circling the Runway";
   var author = "J.L. Abramo";

   return new Book(title, author);
}

function createBook2()
{
   var title = "Freedom's Child";
   var author = "Jax Miller";

   return new Book(title, author);
}

function createBook3()
{
   var title = "Orphan X";
   var author = "Gregg Hurwitz";

   return new Book(title, author);
}

function createBook4()
{
   var title = "The Great Swindle";
   var author = "Pierre Lemaître";

   return new Book(title, author);
}

function createBook5()
{
   var title = "Before the Fall";
   var author = "Noah Hawley";

   return new Book(title, author);
}

var DCLURLFetcherTest = {};
export default DCLURLFetcherTest;