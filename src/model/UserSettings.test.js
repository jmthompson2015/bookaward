/* eslint camelcase: ["error", {allow: ["createNomination1_1","createNomination1_2"]}] */

import Assessment from "../artifact/Assessment.js";
import MysteryAward from "../artifact/MysteryAward.js";

import Book from "./Book.js";
import Nomination from "./Nomination.js";
import UserSettings from "./UserSettings.js";

QUnit.module("UserSettings");

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

function createBooks() {
  const answer = [];

  answer.push(createBook0());
  answer.push(createBook1());
  answer.push(createBook2());

  return answer;
}

function createBookToAssessment() {
  const answer = {};

  answer[createBook0()] = Assessment.NONE;
  answer[createBook1()] = Assessment.NOT_ENOUGH_COPIES;
  answer[createBook2()] = Assessment.NOT_AVAILABLE;

  return answer;
}

function createBookToDclUrl() {
  const answer = {};

  answer[createBook0()] =
    "https://dcl.bibliocommons.com/item/show/1337567114_the_wrong_side_of_goodbye";
  answer[createBook1()] = "https://dcl.bibliocommons.com/item/show/1264991114_make_me";
  // answer[createBook2()] = "";

  return answer;
}

function createNomination0() {
  const awardKey = MysteryAward.BARRY;
  const award = MysteryAward.properties[awardKey];
  const categoryKey = award.categories.NOVEL;
  const category = award.categories.properties[categoryKey];

  return new Nomination(award, category, 2017);
}

function createNomination1_1() {
  const awardKey = MysteryAward.CRIME_AND_BEYOND;
  const award = MysteryAward.properties[awardKey];
  const categoryKey = award.categories.CASE;
  const category = award.categories.properties[categoryKey];

  return new Nomination(award, category, 2016);
}

function createNomination1_2() {
  const awardKey = MysteryAward.EDGAR;
  const award = MysteryAward.properties[awardKey];
  const categoryKey = award.categories.NOVEL;
  const category = award.categories.properties[categoryKey];

  return new Nomination(award, category, 2017);
}

function createBookToNomination() {
  const answer = {};

  const book0 = createBook1();
  answer[book0] = [];
  answer[book0].push(createNomination0());

  const book1 = createBook2();
  answer[book1] = [];
  answer[book1].push(createNomination1_1());
  answer[book1].push(createNomination1_2());

  const book2 = createBook2();
  answer[book2] = [];

  return answer;
}

function verifyBookToAssessment0(assert, bookToAssessment) {
  assert.ok(bookToAssessment);
  assert.equal(Object.keys(bookToAssessment).length, 3);
  assert.equal(bookToAssessment[createBook0()], Assessment.NONE);
  assert.equal(bookToAssessment[createBook1()], Assessment.NONE);
  assert.equal(bookToAssessment[createBook2()], Assessment.NOT_AVAILABLE);
}

function verifyBookToAssessment1(assert, bookToAssessment) {
  assert.ok(bookToAssessment);
  assert.equal(Object.keys(bookToAssessment).length, 3);
  assert.equal(bookToAssessment[createBook0()], Assessment.NONE);
  assert.equal(bookToAssessment[createBook1()], Assessment.NOT_ENOUGH_COPIES);
  assert.equal(bookToAssessment[createBook2()], Assessment.NOT_AVAILABLE);
}

QUnit.test("loadBookToAssessment()", assert => {
  // Setup.
  // const books = createBooks();
  const bookToAssessment = createBookToAssessment();
  UserSettings.storeBookToAssessment(bookToAssessment);

  // Run.
  const result = UserSettings.loadBookToAssessment();

  // Verify.
  verifyBookToAssessment1(assert, result);

  // Cleanup.
  localStorage.removeItem("bookToAssessment");
});

QUnit.test("resetBookToAssessment()", assert => {
  // Setup.
  const bookToAssessment = {};
  const books = createBooks();
  const bookToDclUrl = createBookToDclUrl();
  const bookToNomination = createBookToNomination();

  // Run.
  const result = UserSettings.resetBookToAssessment(
    bookToAssessment,
    books,
    bookToDclUrl,
    bookToNomination
  );

  // Verify.
  verifyBookToAssessment0(assert, result);

  // Cleanup.
  localStorage.removeItem("bookToAssessment");
});

QUnit.test("storeBookToAssessment()", assert => {
  // Setup.
  // const books = createBooks();
  const bookToAssessment = createBookToAssessment();

  // Run.
  UserSettings.storeBookToAssessment(bookToAssessment);
  const result = UserSettings.loadBookToAssessment();

  // Verify.
  verifyBookToAssessment1(assert, result);

  // Cleanup.
  localStorage.removeItem("bookToAssessment");
});

const UserSettingsTest = {};
export default UserSettingsTest;
