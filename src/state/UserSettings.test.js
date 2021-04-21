/* eslint camelcase: ["error", {allow: ["createNomination1_1","createNomination1_2"]}] */

import Assessment from "../artifact/Assessment.js";

import Book from "./Book.js";
import UserSettings from "./UserSettings.js";

QUnit.module("UserSettings");

const APP_NAME = "BookTest";

function createBook0() {
  const title = "The Wrong Side of Goodbye";
  const author = "Michael Connelly";

  return new Book(title, author);
}

function createBook1() {
  const title = "Make Me";
  const author = "Lee Child";

  return new Book(title, author);
}

function createBook2() {
  const title = "In a Dark, Dark Wood";
  const author = "Ruth Ware";

  return new Book(title, author);
}

function createBookToAssessment() {
  const answer = {};

  answer[createBook0()] = Assessment.NONE;
  answer[createBook1()] = Assessment.NOT_ENOUGH_COPIES;
  answer[createBook2()] = Assessment.NONE;

  return answer;
}

function verifyBookToAssessment1(assert, bookToAssessment) {
  assert.ok(bookToAssessment);
  assert.equal(Object.keys(bookToAssessment).length, 3);
  assert.equal(bookToAssessment[createBook0()], Assessment.NONE);
  assert.equal(bookToAssessment[createBook1()], Assessment.NOT_ENOUGH_COPIES);
  assert.equal(bookToAssessment[createBook2()], Assessment.NONE);
}

QUnit.test("loadBookToAssessment()", (assert) => {
  // Setup.
  const bookToAssessment = createBookToAssessment();
  UserSettings.storeBookToAssessment(APP_NAME, bookToAssessment);

  // Run.
  const result = UserSettings.loadBookToAssessment(APP_NAME);

  // Verify.
  verifyBookToAssessment1(assert, result);

  // Cleanup.
  localStorage.removeItem(APP_NAME);
});

QUnit.test("storeBookToAssessment()", (assert) => {
  // Setup.
  const bookToAssessment = createBookToAssessment();

  // Run.
  UserSettings.storeBookToAssessment(APP_NAME, bookToAssessment);
  const result = UserSettings.loadBookToAssessment(APP_NAME);

  // Verify.
  verifyBookToAssessment1(assert, result);

  // Cleanup.
  localStorage.removeItem(APP_NAME);
});

const UserSettingsTest = {};
export default UserSettingsTest;
