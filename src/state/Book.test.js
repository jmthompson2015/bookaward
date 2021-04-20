import Book from "./Book.js";

QUnit.module("Book");

QUnit.test("Book()", function(assert)
{
   // Setup.
   const title = "A Dark and Stormy Night";
   const author = "Noah Boddy";

   // Run.
   const result = new Book(title, author);

   // Verify.
   assert.ok(result);
   assert.equal(result.title, title);
   assert.equal(result.author, author);
});

const BookTest = {};
export default BookTest;