import Assessment from "../artifact/Assessment.js";
import SciFiAward from "../artifact/SciFiAward.js";

import Action from "./Action.js";
import Book from "./Book.js";
import Nomination from "./Nomination.js";
import SciFiInitialState from "./SciFiInitialState.js";
import SciFiReducer from "./SciFiReducer.js";

QUnit.module("SciFiReducer");

QUnit.test("addBook()", function(assert)
{
   // Setup.
   const state = new SciFiInitialState();
   const length = 92;
   assert.equal(state.books.length, length);
   const book = createBook1();
   const action = Action.addBook(book);

   // Run.
   const result = SciFiReducer.root(state, action);

   // Verify.
   assert.ok(result);
   assert.equal(result.books.length, length + 1);
});

QUnit.test("addNomination()", function(assert)
{
   // Setup.
   let state = new SciFiInitialState();
   const book = createBook1();
   state = SciFiReducer.root(state, Action.addBook(book));
   const nomination = createNomination1();
   assert.ok(state.bookToNomination[book]);
   assert.ok(Array.isArray(state.bookToNomination[book]));
   assert.equal(state.bookToNomination[book].length, 0);
   const action = Action.addNomination(book, nomination);

   // Run.
   const result = SciFiReducer.root(state, action);

   // Verify.
   assert.ok(result);
   assert.ok(result.bookToNomination[book]);
   assert.ok(Array.isArray(result.bookToNomination[book]));
   assert.equal(result.bookToNomination[book].length, 1);
   assert.equal(result.bookToNomination[book][0], nomination);
});

QUnit.test("setAssessment()", function(assert)
{
   // Setup.
   let state = new SciFiInitialState();
   const book = createBook1();
   state = SciFiReducer.root(state, Action.addBook(book));
   const assessment = Assessment.POSSIBLE_PICK;
   assert.equal(state.bookToAssessment[book], Assessment.NONE);
   const action = Action.setAssessment(book, assessment);

   // Run.
   const result = SciFiReducer.root(state, action);

   // Verify.
   assert.ok(result);
   assert.equal(result.bookToAssessment[book], assessment);
});

function createBook1()
{
   const title = "A Dark and Stormy Night";
   const author = "Noah Boddy";

   return new Book(title, author);
}

function createNomination1()
{
   const awardKey = SciFiAward.HUGO;
   const award = SciFiAward.properties[awardKey];
   const categoryKey = award.categories.NOVEL;
   const category = award.categories.properties[categoryKey];
   const year = 2016;

   return new Nomination(award, category, year);
}

const SciFiReducerTest = {};
export default SciFiReducerTest;