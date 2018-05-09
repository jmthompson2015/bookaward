import Book from "../model/Book.js";

import DCLURLFetcher from "./DCLURLFetcher.js";

QUnit.module("DCLURLFetcher");

QUnit.test("fetchData() 0", function(assert)
{
   // Setup.
   const book = createBook0();
   const callback = function(book, dclUrl)
   {
      // Verify.
      assert.ok(book);
      assert.ok(dclUrl);
      assert.equal(dclUrl, "https://dcl.bibliocommons.com/item/show/1337567114");
      done();
   };
   const fetcher = new DCLURLFetcher(book, callback);

   // Run.
   const done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() 1", function(assert)
{
   // Setup.
   const book = createBook1();
   const callback = function(book, dclUrl)
   {
      // Verify.
      assert.ok(book);
      assert.equal(dclUrl, undefined);
      done();
   };
   const fetcher = new DCLURLFetcher(book, callback);

   // Run.
   const done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() 2", function(assert)
{
   // Setup.
   const book = createBook2();
   const callback = function(book, dclUrl)
   {
      // Verify.
      assert.ok(book);
      assert.ok(dclUrl);
      assert.equal(dclUrl, "https://dcl.bibliocommons.com/item/show/1268318114");
      done();
   };
   const fetcher = new DCLURLFetcher(book, callback);

   // Run.
   const done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() 3", function(assert)
{
   // Setup.
   const book = createBook3();
   const callback = function(book, dclUrl)
   {
      // Verify.
      assert.ok(book);
      assert.ok(dclUrl);
      assert.equal(dclUrl, "https://dcl.bibliocommons.com/item/show/1431233114");
      done();
   };
   const fetcher = new DCLURLFetcher(book, callback);

   // Run.
   const done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() 4", function(assert)
{
   // Setup.
   const book = createBook4();
   const callback = function(book, dclUrl)
   {
      // Verify.
      assert.ok(book);
      assert.equal(dclUrl, undefined);
      done();
   };
   const fetcher = new DCLURLFetcher(book, callback);

   // Run.
   const done = assert.async();
   fetcher.fetchData();
});

QUnit.test("fetchData() 5", function(assert)
{
   // Setup.
   const book = createBook5();
   const callback = function(book, dclUrl)
   {
      // Verify.
      assert.ok(book);
      assert.ok(dclUrl);
      assert.equal(dclUrl, "https://dcl.bibliocommons.com/item/show/1309150114");
      done();
   };
   const fetcher = new DCLURLFetcher(book, callback);

   // Run.
   const done = assert.async();
   fetcher.fetchData();
});

function createBook0()
{
   const title = "The Wrong Side of Goodbye";
   const author = "Michael Connelly";

   return new Book(title, author);
}

function createBook1()
{
   const title = "Circling the Runway";
   const author = "J.L. Abramo";

   return new Book(title, author);
}

function createBook2()
{
   const title = "Freedom's Child";
   const author = "Jax Miller";

   return new Book(title, author);
}

function createBook3()
{
   const title = "Orphan X";
   const author = "Gregg Hurwitz";

   return new Book(title, author);
}

function createBook4()
{
   const title = "The Great Swindle";
   const author = "Pierre Lemaître";

   return new Book(title, author);
}

function createBook5()
{
   const title = "Before the Fall";
   const author = "Noah Hawley";

   return new Book(title, author);
}

const DCLURLFetcherTest = {};
export default DCLURLFetcherTest;