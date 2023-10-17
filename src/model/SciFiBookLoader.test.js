import Reducer from "../state/Reducer.js";

import SciFiBookLoader from "./SciFiBookLoader.js";

QUnit.module("SciFiBookLoader");

QUnit.test("load()", (assert) => {
  // Setup.
  const store = Redux.createStore(Reducer.root);

  // Run.
  const done = assert.async();
  SciFiBookLoader.load(store).then(() => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    const { books, bookToNomination } = store.getState();
    assert.ok(books);
    assert.equal(books.length, 113);
    const bookFirst = R.head(books);
    assert.ok(bookFirst);
    assert.equal(bookFirst.title, "Agency");
    assert.equal(bookFirst.author, "William Gibson");
    const bookLast = R.last(books);
    assert.ok(bookLast);
    assert.equal(bookLast.title, "You Sexy Thing");
    assert.equal(bookLast.author, "Cat Rambo");

    assert.ok(bookToNomination);
    assert.equal(Object.keys(bookToNomination).length, 113);
    const nominationsFirst = bookToNomination[bookFirst];
    assert.ok(nominationsFirst);
    assert.equal(nominationsFirst.length, 1);
    const nomination0 = nominationsFirst[0];
    assert.equal(nomination0.award.key, "locus");
    assert.equal(nomination0.year, 2021);
    done();
  });
});

const SciFiBookLoaderTest = {};
export default SciFiBookLoaderTest;
