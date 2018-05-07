import Assessment from "../artifact/Assessment.js";

import MysteryInitialState from "./MysteryInitialState.js";

QUnit.module("MysteryInitialState");

QUnit.test("MysteryInitialState()", function(assert)
{
   // Run.
   var result = new MysteryInitialState();

   // Verify.
   assert.ok(result.books);
   var length = 116;
   assert.equal(result.books.length, length);

   assert.ok(result.bookToNomination);
   assert.equal(result.bookToNomination[result.books[0]].length, 1);
   assert.equal(result.bookToNomination[result.books[length - 1]].length, 2);

   assert.ok(result.bookToAssessment);
   assert.ok(result.bookToAssessment[result.books[0]]);
   assert.equal(result.bookToAssessment[result.books[0]], Assessment.NONE);
   assert.ok(result.bookToAssessment[result.books[length - 1]]);
   assert.equal(result.bookToAssessment[result.books[length - 1]], Assessment.NONE);

   assert.ok(result.bookToDclUrl);
   //  assert.ok(result.bookToDclUrl[result.books[0]]);
   //  assert.equal(result.bookToDclUrl[result.books[0]], "https://dcl.bibliocommons.com/item/show/1358004114_the_7th_canon");
   //  assert.ok(result.bookToDclUrl[result.books[length - 1]]);
   //  assert.equal(result.bookToDclUrl[result.books[length - 1]], "https://dcl.bibliocommons.com/item/show/1317759114_you_will_know_me");
});

var MysteryInitialStateTest = {};
export default MysteryInitialStateTest;