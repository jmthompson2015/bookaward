import Book from "../model/Book.js";

import DCLURLFetcher from "./DCLURLFetcher.js";

QUnit.module("DCLURLFetcher");

function createBook0() {
  const title = "The Wrong Side of Goodbye";
  const author = "Michael Connelly";

  return new Book(title, author);
}

function createBook1() {
  const title = "Circling the Runway";
  const author = "J.L. Abramo";

  return new Book(title, author);
}

function createBook2() {
  const title = "Freedom's Child";
  const author = "Jax Miller";

  return new Book(title, author);
}

function createBook3() {
  const title = "Orphan X";
  const author = "Gregg Hurwitz";

  return new Book(title, author);
}

function createBook4() {
  const title = "The Great Swindle";
  const author = "Pierre Lemaître";

  return new Book(title, author);
}

function createBook5() {
  const title = "Before the Fall";
  const author = "Noah Hawley";

  return new Book(title, author);
}

QUnit.test("fetchData() 0", assert => {
  // Setup.
  const book0 = createBook0();
  const done = assert.async();
  const callback = ({ book, dclUrl }) => {
    // Verify.
    assert.ok(book);
    assert.ok(dclUrl);
    assert.equal(dclUrl, "https://dcl.bibliocommons.com/item/show/1337567114");
    done();
  };
  const fetcher = new DCLURLFetcher(book0);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.test("fetchData() 1", assert => {
  // Setup.
  const book0 = createBook1();
  const done = assert.async();
  const callback = ({ book, dclUrl }) => {
    // Verify.
    assert.ok(book);
    assert.equal(dclUrl, undefined);
    done();
  };
  const fetcher = new DCLURLFetcher(book0);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.test("fetchData() 2", assert => {
  // Setup.
  const book0 = createBook2();
  const done = assert.async();
  const callback = ({ book, dclUrl }) => {
    // Verify.
    assert.ok(book);
    assert.ok(dclUrl);
    assert.equal(dclUrl, "https://dcl.bibliocommons.com/item/show/1268318114");
    done();
  };
  const fetcher = new DCLURLFetcher(book0);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.test("fetchData() 3", assert => {
  // Setup.
  const book0 = createBook3();
  const done = assert.async();
  const callback = ({ book, dclUrl }) => {
    // Verify.
    assert.ok(book);
    assert.ok(dclUrl);
    assert.equal(dclUrl, "https://dcl.bibliocommons.com/item/show/1523229114");
    done();
  };
  const fetcher = new DCLURLFetcher(book0);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.test("fetchData() 4", assert => {
  // Setup.
  const book0 = createBook4();
  const done = assert.async();
  const callback = ({ book, dclUrl }) => {
    // Verify.
    assert.ok(book);
    assert.equal(dclUrl, undefined);
    done();
  };
  const fetcher = new DCLURLFetcher(book0);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.test("fetchData() 5", assert => {
  // Setup.
  const book0 = createBook5();
  const done = assert.async();
  const callback = ({ book, dclUrl }) => {
    // Verify.
    assert.ok(book);
    assert.ok(dclUrl);
    assert.equal(dclUrl, "https://dcl.bibliocommons.com/item/show/1309150114");
    done();
  };
  const fetcher = new DCLURLFetcher(book0);

  // Run.
  fetcher.fetchData().then(callback);
});

const DCLURLFetcherTest = {};
export default DCLURLFetcherTest;
