import Assessment from "../artifact/Assessment.js";
import MysteryAward from "../artifact/MysteryAward.js";

import Action from "./Action.js";
import Book from "./Book.js";
import InitialState from "./MysteryInitialState.js";
import Nomination from "./Nomination.js";
import Reducer from "./Reducer.js";

QUnit.module("Reducer");

const createBook1 = () => {
  const title = "A Dark and Stormy Night";
  const author = "Noah Boddy";

  return new Book(title, author);
};

const createNomination1 = () => {
  const awardKey = MysteryAward.AGATHA;
  const award = MysteryAward.properties[awardKey];
  const categoryKey = award.categories.CONTEMPORARY;
  const category = award.categories.properties[categoryKey];
  const year = 2016;

  return new Nomination(award, category, year);
};

QUnit.test("addBook()", assert => {
  // Setup.
  const state = new InitialState();
  const length = 156;
  assert.equal(state.books.length, length);
  const book = createBook1();
  const action = Action.addBook(book);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.books.length, length + 1);
});

QUnit.test("addNomination()", assert => {
  // Setup.
  let state = new InitialState();
  const book = createBook1();
  state = Reducer.root(state, Action.addBook(book));
  const nomination = createNomination1();
  assert.ok(state.bookToNomination[book]);
  assert.ok(Array.isArray(state.bookToNomination[book]));
  assert.equal(state.bookToNomination[book].length, 0);
  const action = Action.addNomination(book, nomination);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.ok(result.bookToNomination[book]);
  assert.ok(Array.isArray(result.bookToNomination[book]));
  assert.equal(result.bookToNomination[book].length, 1);
  assert.equal(result.bookToNomination[book][0], nomination);
});

QUnit.test("setAssessment()", assert => {
  // Setup.
  let state = new InitialState();
  const book = createBook1();
  state = Reducer.root(state, Action.addBook(book));
  const assessment = Assessment.POSSIBLE_PICK;
  assert.equal(state.bookToAssessment[book], Assessment.NONE);
  const action = Action.setAssessment(book, assessment);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.bookToAssessment[book], assessment);
});

QUnit.test("setAssessments()", assert => {
  // Setup.
  let state = new InitialState();
  const book = createBook1();
  state = Reducer.root(state, Action.addBook(book));
  assert.equal(state.bookToAssessment[book], Assessment.NONE);

  const assessment = Assessment.POSSIBLE_PICK;
  const bookToAssessment = {};
  bookToAssessment[book] = assessment;
  const action = Action.setAssessments(bookToAssessment);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.bookToAssessment[book], assessment);
});

const ReducerTest = {};
export default ReducerTest;
