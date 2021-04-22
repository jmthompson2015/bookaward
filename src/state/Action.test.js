import Assessment from "../artifact/Assessment.js";
import MysteryAward from "../artifact/MysteryAward.js";

import Action from "./Action.js";
import Book from "./Book.js";
import Nomination from "./Nomination.js";

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

QUnit.module("Action");

QUnit.test("addBooks()", (assert) => {
  // Setup.
  const book = createBook1();

  // Run.
  const result = Action.addBooks([book]);

  // Verify.
  assert.ok(result);
  assert.equal(result.type, Action.ADD_BOOKS);
  assert.equal(result.books.length, 1);
  assert.equal(R.head(result.books), book);
});

QUnit.test("addBookToNomination()", (assert) => {
  // Setup.
  const book = createBook1();
  const nomination = createNomination1();
  const bookToNomination = { [book]: nomination };

  // Run.
  const result = Action.addBookToNomination(bookToNomination);

  // Verify.
  assert.ok(result);
  assert.equal(result.type, Action.ADD_BOOK_TO_NOMINATION);
  assert.equal(result.bookToNomination, bookToNomination);
});

QUnit.test("setAppName()", (assert) => {
  // Setup.
  const appName = "MyPerfectApp";

  // Run.
  const result = Action.setAppName(appName);

  // Verify.
  assert.ok(result);
  assert.equal(result.appName, appName);
});

QUnit.test("setAssessment()", (assert) => {
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

QUnit.test("setAssessments()", (assert) => {
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

QUnit.test("setWinnerImage()", (assert) => {
  // Setup.
  const winnerImage = "/path/to/some/image.png";

  // Run.
  const result = Action.setWinnerImage(winnerImage);

  // Verify.
  assert.ok(result);
  assert.equal(result.winnerImage, winnerImage);
});

const ActionTest = {};
export default ActionTest;
