import Book from "./Book.js";
import BookComparator from "./BookComparator.js";

QUnit.module("BookComparator");

QUnit.test("compare()", function(assert)
{
   // Setup.
   const book0 = new Book("A", "Alpha");
   const book1 = new Book("B", "Bravo");
   const book2 = new Book("C", "Charlie");
   const book3 = new Book("A", "Alpha");

   // Run / Verify.
   assert.equal(BookComparator.compare(book0, book0), 0);
   assert.equal(BookComparator.compare(book0, book1), 1);
   assert.equal(BookComparator.compare(book0, book2), 1);
   assert.equal(BookComparator.compare(book0, book3), 0);

   assert.equal(BookComparator.compare(book1, book0), -1);
   assert.equal(BookComparator.compare(book1, book1), 0);
   assert.equal(BookComparator.compare(book1, book2), -1);
   assert.equal(BookComparator.compare(book1, book3), -1);

   assert.equal(BookComparator.compare(book2, book0), -1);
   assert.equal(BookComparator.compare(book2, book1), 1);
   assert.equal(BookComparator.compare(book2, book2), 0);
   assert.equal(BookComparator.compare(book2, book3), -1);

   assert.equal(BookComparator.compare(book3, book0), 0);
   assert.equal(BookComparator.compare(book3, book1), 1);
   assert.equal(BookComparator.compare(book3, book2), 1);
   assert.equal(BookComparator.compare(book3, book3), 0);
});

QUnit.test("equals()", function(assert)
{
   // Setup.
   const book0 = new Book("A", "Alpha");
   const book1 = new Book("B", "Bravo");
   const book2 = new Book("C", "Charlie");
   const book3 = new Book("A", "Alpha");

   // Run / Verify.
   assert.equal(BookComparator.equals(book0, book0), true);
   assert.equal(BookComparator.equals(book0, book1), false);
   assert.equal(BookComparator.equals(book0, book2), false);
   assert.equal(BookComparator.equals(book0, book3), true);

   assert.equal(BookComparator.equals(book1, book0), false);
   assert.equal(BookComparator.equals(book1, book1), true);
   assert.equal(BookComparator.equals(book1, book2), false);
   assert.equal(BookComparator.equals(book1, book3), false);

   assert.equal(BookComparator.equals(book2, book0), false);
   assert.equal(BookComparator.equals(book2, book1), false);
   assert.equal(BookComparator.equals(book2, book2), true);
   assert.equal(BookComparator.equals(book2, book3), false);

   assert.equal(BookComparator.equals(book3, book0), true);
   assert.equal(BookComparator.equals(book3, book1), false);
   assert.equal(BookComparator.equals(book3, book2), false);
   assert.equal(BookComparator.equals(book3, book3), true);
});

const BookComparatorTest = {};
export default BookComparatorTest;