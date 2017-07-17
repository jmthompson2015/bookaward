define(["MysteryAward", "process/SYKMNomineeFetcher"],
   function(Award, SYKMNomineeFetcher)
   {
      "use strict";
      QUnit.module("SYKMNomineeFetcher0");

      QUnit.test("fetchData() Agatha", function(assert)
      {
         // Setup.
         var award = Award.properties[Award.AGATHA];
         var callback = function(books, bookToNomination)
         {
            // Verify.
            assert.ok(true, "test resumed from async operation");
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
            done();
         };
         var fetcher = new SYKMNomineeFetcher(award, callback);

         // Run.
         var done = assert.async();
         fetcher.fetchData();
      });

      QUnit.skip("fetchData() Anthony", function(assert)
      {
         // Setup.
         var award = Award.properties[Award.ANTHONY];
         var callback = function(books, bookToNomination)
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

      QUnit.skip("fetchData() Barry", function(assert)
      {
         // Setup.
         var award = Award.properties[Award.BARRY];
         var callback = function(books, bookToNomination)
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

      QUnit.skip("fetchData() Dagger", function(assert)
      {
         // Setup.
         var award = Award.properties[Award.DAGGER];
         var callback = function(books, bookToNomination)
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

      QUnit.skip("fetchData() Edgar", function(assert)
      {
         // Setup.
         var award = Award.properties[Award.EDGAR];
         var callback = function(books, bookToNomination)
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

      QUnit.skip("fetchData() Shamus", function(assert)
      {
         // Setup.
         var award = Award.properties[Award.SHAMUS];
         var callback = function(books, bookToNomination)
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
   });
