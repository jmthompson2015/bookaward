import Assessment from "../artifact/Assessment.js";
import MysteryAward from "../artifact/MysteryAward.js";

import Action from "./Action.js";
import Book from "./Book.js";
import Nomination from "./Nomination.js";

QUnit.module("Action");

QUnit.test("addBook()", function(assert)
{
   // Setup.
   const book = createBook1();

   // Run.
   const result = Action.addBook(book);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, Action.ADD_BOOK);
   assert.equal(result.book, book);
});

QUnit.test("addNomination()", function(assert)
{
   // Setup.
   const book = createBook1();
   const nomination = createNomination1();

   // Run.
   const result = Action.addNomination(book, nomination);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, Action.ADD_NOMINATION);
   assert.equal(result.book, book);
   assert.equal(result.nomination, nomination);
});

QUnit.test("setAssessment()", function(assert)
{
   // Setup.
   const book = createBook1();
   const assessment = Assessment.POSSIBLE_PICK;

   // Run.
   const result = Action.setAssessment(book, assessment);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, Action.SET_ASSESSMENT);
   assert.equal(result.book, book);
   assert.equal(result.assessment, assessment);
});

QUnit.test("setAssessments()", function(assert)
{
   // Setup.
   const book = createBook1();
   const assessment = Assessment.POSSIBLE_PICK;
   const bookToAssessment = {};
   bookToAssessment[book] = assessment;

   // Run.
   const result = Action.setAssessments(bookToAssessment);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, Action.SET_ASSESSMENTS);
   assert.equal(result.bookToAssessment, bookToAssessment);
});

function createBook1()
{
   const title = "A Dark and Stormy Night";
   const author = "Noah Boddy";

   return new Book(title, author);
}

function createNomination1()
{
   const awardKey = MysteryAward.AGATHA;
   const award = MysteryAward.properties[awardKey];
   const categoryKey = award.categories.CONTEMPORARY;
   const category = award.categories.properties[categoryKey];
   const year = 2016;

   return new Nomination(award, category, year);
}

const ActionTest = {};
export default ActionTest;