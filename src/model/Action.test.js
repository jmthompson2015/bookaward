import Assessment from "../artifact/Assessment.js";
import MysteryAward from "../artifact/MysteryAward.js";

import Action from "./Action.js";
import Book from "./Book.js";
import Nomination from "./Nomination.js";

QUnit.module("Action");

QUnit.test("addBook()", function(assert)
{
   // Setup.
   var book = createBook1();

   // Run.
   var result = Action.addBook(book);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, Action.ADD_BOOK);
   assert.equal(result.book, book);
});

QUnit.test("addNomination()", function(assert)
{
   // Setup.
   var book = createBook1();
   var nomination = createNomination1();

   // Run.
   var result = Action.addNomination(book, nomination);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, Action.ADD_NOMINATION);
   assert.equal(result.book, book);
   assert.equal(result.nomination, nomination);
});

QUnit.test("setAssessment()", function(assert)
{
   // Setup.
   var book = createBook1();
   var assessment = Assessment.POSSIBLE_PICK;

   // Run.
   var result = Action.setAssessment(book, assessment);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, Action.SET_ASSESSMENT);
   assert.equal(result.book, book);
   assert.equal(result.assessment, assessment);
});

QUnit.test("setAssessments()", function(assert)
{
   // Setup.
   var book = createBook1();
   var assessment = Assessment.POSSIBLE_PICK;
   var bookToAssessment = {};
   bookToAssessment[book] = assessment;

   // Run.
   var result = Action.setAssessments(bookToAssessment);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, Action.SET_ASSESSMENTS);
   assert.equal(result.bookToAssessment, bookToAssessment);
});

function createBook1()
{
   var title = "A Dark and Stormy Night";
   var author = "Noah Boddy";

   return new Book(title, author);
}

function createNomination1()
{
   var awardKey = MysteryAward.AGATHA;
   var award = MysteryAward.properties[awardKey];
   var categoryKey = award.categories.CONTEMPORARY;
   var category = award.categories.properties[categoryKey];
   var year = 2016;

   return new Nomination(award, category, year);
}

var ActionTest = {};
export default ActionTest;