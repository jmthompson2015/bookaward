import Reducer from "./Reducer.js";

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
    assert.equal(books.length, 154);
    const bookFirst = R.head(books);
    assert.ok(bookFirst);
    assert.equal(bookFirst.title, "The Alchemist's Illusion");
    assert.equal(bookFirst.author, "Gigi Pandian");
    const bookLast = R.last(books);
    assert.ok(bookLast);
    assert.equal(bookLast.title, "Your House Will Pay");
    assert.equal(bookLast.author, "Steph Cha");

    assert.ok(bookToNomination);
    assert.equal(Object.keys(bookToNomination).length, 154);
    const nominationsFirst = bookToNomination[bookFirst];
    assert.ok(nominationsFirst);
    assert.equal(nominationsFirst.length, 1);
    const nomination0 = nominationsFirst[0];
    assert.equal(nomination0.award.key, "anthony");
    assert.equal(nomination0.year, 2020);
    done();
  });
});

const MysteryBookLoaderTest = {};
export default MysteryBookLoaderTest;
