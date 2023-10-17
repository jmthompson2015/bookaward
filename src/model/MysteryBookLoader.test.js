import Reducer from "../state/Reducer.js";

import MysteryBookLoader from "./MysteryBookLoader.js";

QUnit.module("MysteryBookLoader");

QUnit.test("load()", (assert) => {
  // Setup.
  const store = Redux.createStore(Reducer.root);

  // Run.
  const done = assert.async();
  MysteryBookLoader.load(store).then(() => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    const { books, bookToNomination } = store.getState();
    assert.ok(books);
    assert.equal(books.length, 163);
    const bookFirst = R.head(books);
    assert.ok(bookFirst);
    assert.equal(bookFirst.title, "The Accomplice");
    assert.equal(bookFirst.author, "Steve Cavanag");
    const bookLast = R.last(books);
    assert.ok(bookLast);
    assert.equal(bookLast.title, "A World of Curiosities");
    assert.equal(bookLast.author, "Louise Penny");

    assert.ok(bookToNomination);
    assert.equal(Object.keys(bookToNomination).length, 163);
    const nominationsFirst = bookToNomination[bookFirst];
    assert.ok(nominationsFirst);
    assert.equal(nominationsFirst.length, 1);
    const nomination0 = nominationsFirst[0];
    assert.equal(nomination0.award.key, "barry");
    assert.equal(nomination0.year, 2023);
    done();
  });
});

const MysteryBookLoaderTest = {};
export default MysteryBookLoaderTest;
