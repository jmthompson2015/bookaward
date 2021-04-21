import Assessment from "../artifact/Assessment.js";
import MysteryAward from "../artifact/MysteryAward.js";

import Action from "./Action.js";
import Book from "./Book.js";
import AppState from "./AppState.js";
import Nomination from "./Nomination.js";
import Reducer from "./Reducer.js";

QUnit.module("Reducer");

const createBook1 = () => {
  const title = "A Dark and Stormy Night";
  const author = "Noah Boddy";

  return new Book(title, author);
};

const createNomination0 = () => {
  const awardKey = MysteryAward.BARRY;
  const award = MysteryAward.properties[awardKey];
  const categoryKey = award.categories.FIRST;
  const category = award.categories.properties[categoryKey];
  const year = 2021;

  return new Nomination(award, category, year);
};

const createNomination1 = () => {
  const awardKey = MysteryAward.AGATHA;
  const award = MysteryAward.properties[awardKey];
  const categoryKey = award.categories.CONTEMPORARY;
  const category = award.categories.properties[categoryKey];
  const year = 2016;

  return new Nomination(award, category, year);
};

QUnit.test("addBook()", (assert) => {
  // Setup.
  const state = AppState.create();
  const length = 0;
  assert.equal(state.books.length, length);
  const book = createBook1();
  const action = Action.addBook(book);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  assert.equal(result.books.length, length + 1);
});

QUnit.test("addBookToNomination()", (assert) => {
  // Setup.
  const state = AppState.create();
  const book = createBook1();
  const nomination0 = createNomination0();
  const bookToNomination0 = R.assoc(book, [nomination0], {});
  const action0 = Action.addBookToNomination(bookToNomination0);

  // Run.
  const result0 = Reducer.root(state, action0);

  // Verify.
  assert.ok(result0);
  assert.equal(
    result0.bookToNomination[book].length,
    1,
    `bookToNomination[book].length = ${result0.bookToNomination[book].length}`
  );

  // Setup.
  const nomination1 = createNomination1();
  const bookToNomination1 = R.assoc(book, [nomination1], {});
  const action1 = Action.addBookToNomination(bookToNomination1);

  // Run.
  const result1 = Reducer.root(result0, action1);

  // Verify.
  assert.ok(result1);
  assert.equal(
    result1.bookToNomination[book].length,
    2,
    `bookToNomination[book].length = ${result0.bookToNomination[book].length}`
  );
});

QUnit.test("addNomination()", (assert) => {
  // Setup.
  let state = AppState.create();
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

QUnit.test("setAssessment()", (assert) => {
  // Setup.
  let state = AppState.create();
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

QUnit.test("setAssessments()", (assert) => {
  // Setup.
  let state = AppState.create();
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
