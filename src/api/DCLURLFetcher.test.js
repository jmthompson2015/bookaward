"use strict";

define(["artifact/MysteryAward", "model/Book", "api/DCLURLFetcher"],
   function(Award, Book, DCLURLFetcher)
   {
      QUnit.module("DCLURLFetcher");

      QUnit.test("receiveData() 0", function(assert)
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
         var xmlDocument = load(book);

         // Run.
         var done = assert.async();
         fetcher.receiveData(xmlDocument);
      });

      QUnit.test("receiveData() 1", function(assert)
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
         var xmlDocument = load(book);

         // Run.
         var done = assert.async();
         fetcher.receiveData(xmlDocument);
      });

      QUnit.test("receiveData() 2", function(assert)
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
         var xmlDocument = load(book);

         // Run.
         var done = assert.async();
         fetcher.receiveData(xmlDocument);
      });

      QUnit.test("receiveData() 3", function(assert)
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
         var xmlDocument = load(book);

         // Run.
         var done = assert.async();
         fetcher.receiveData(xmlDocument);
      });

      QUnit.test("receiveData() 4", function(assert)
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
         var xmlDocument = load(book);

         // Run.
         var done = assert.async();
         fetcher.receiveData(xmlDocument);
      });

      QUnit.test("receiveData() 5", function(assert)
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
         var xmlDocument = load(book);

         // Run.
         var done = assert.async();
         fetcher.receiveData(xmlDocument);
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

      function load(book)
      {
         var name = book.title();
         name = name.replace(/ /g, "_");
         name = name.replace(/\u2019/g, "");
         name = name.replace(/'/g, "");
         var request = new XMLHttpRequest();
         var url = "../resource/testdoc/" + name + ".xml";
         LOGGER.debug("url = " + url);
         var isAsync = false;
         request.open("GET", url, isAsync);
         request.send();

         return request.responseXML;
      }
   });