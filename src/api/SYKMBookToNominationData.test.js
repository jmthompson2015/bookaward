import MysteryAward from "../artifact/MysteryAward.js";

import Book from "../state/Book.js";

import SYKMBookToNominationData from "./SYKMBookToNominationData.js";

QUnit.module("SYKMBookToNominationData");

QUnit.test("access", (assert) => {
  // Setup.
  const book = new Book("Razorblade Tears", "S.A. Cosby");

  // Run.
  const result = SYKMBookToNominationData[book];

  // Verify.
  assert.ok(result);
  assert.ok(result.length, 3);

  const head = R.head(result);
  assert.ok(head);
  assert.equal(head.award.key, MysteryAward.ANTHONY);
  assert.equal(head.category.key, "mystery");
  assert.equal(head.year, 2022);

  const last = R.last(result);
  assert.ok(last);
  assert.equal(last.award.key, MysteryAward.EDGAR);
  assert.equal(last.category.key, "mystery");
  assert.equal(last.year, 2022);
});

const SYKMBookToNominationDataTest = {};
export default SYKMBookToNominationDataTest;
