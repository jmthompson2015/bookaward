import MysteryAward from "../artifact/MysteryAward.js";

import SYKMNomineeFetcher from "./SYKMNomineeFetcher.js";

QUnit.module("SYKMNomineeFetcher");

QUnit.test("fetchData() Agatha", (assert) => {
  // Setup.
  const award = MysteryAward.properties[MysteryAward.AGATHA];
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    assert.ok(books, "books");
    assert.ok(bookToNomination, "bookToNomination");
    assert.equal(books.length, 31);

    let i = 0;
    assert.equal(books[i].title, "The Gift of the Magpie");
    assert.equal(books[i].author, "Donna Andrews");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.CONTEMPORARY];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2020);
    assert.ok(!nominations[j].isWinner);

    i = books.length - 1;
    assert.equal(books[i].title, "The Naming Game");
    assert.equal(books[i].author, "Gabriel Valjan");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.HISTORICAL];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2019);
    assert.ok(!nominations[j].isWinner);
    done();
  };
  const fetcher = new SYKMNomineeFetcher(award);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.test("fetchData() Anthony", (assert) => {
  // Setup.
  const award = MysteryAward.properties[MysteryAward.ANTHONY];
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    assert.ok(books);
    assert.equal(books.length, 32);

    let i = 0;
    assert.equal(books[i].title, "The Murder List");
    assert.equal(books[i].author, "Hank Phillippi Ryan");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.MYSTERY];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2020);

    i = books.length - 1;
    assert.equal(books[i].title, "A Stone's Throw");
    assert.equal(books[i].author, "James W. Ziskin");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.PAPERBACK];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2019);
    done();
  };
  const fetcher = new SYKMNomineeFetcher(award);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.test("fetchData() Barry", (assert) => {
  // Setup.
  const award = MysteryAward.properties[MysteryAward.BARRY];
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    assert.ok(books);
    assert.equal(books.length, 54);

    let i = 0;
    assert.equal(books[i].title, "The Boy from the Woods");
    assert.equal(books[i].author, "Harlan Coben");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.MYSTERY];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2021);

    i = books.length - 1;
    assert.equal(books[i].title, "The Border");
    assert.equal(books[i].author, "Don Winslow");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 2);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.MYSTERY];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2020);
    done();
  };
  const fetcher = new SYKMNomineeFetcher(award);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.skip("fetchData() Dagger", (assert) => {
  // Setup.
  const award = MysteryAward.properties[MysteryAward.DAGGER];
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    assert.ok(books);
    assert.equal(books.length, 28);

    let i = 0;
    assert.equal(books[i].title, "The Dry");
    assert.equal(books[i].author, "Jane Harper");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.GOLD];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2017);
    assert.ok(nominations[j].isWinner);

    i = books.length - 1;
    assert.equal(books[i].title, "A Climate of Fear");
    assert.equal(books[i].author, "Fred Vargas");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.INTERNATIONAL];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2017);
    assert.ok(!nominations[j].isWinner);
    done();
  };
  const fetcher = new SYKMNomineeFetcher(award);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.test("fetchData() Edgar", (assert) => {
  // Setup.
  const award = MysteryAward.properties[MysteryAward.EDGAR];
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    assert.ok(books);
    assert.equal(books.length, 33);

    let i = 0;
    assert.equal(books[i].title, "Djinn Patrol on the Purple Line");
    assert.equal(books[i].author, "Deepa Anappara");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.NOVEL];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2021);

    i = books.length - 1;
    assert.equal(books[i].title, "The Bird Boys");
    assert.equal(books[i].author, "Lisa Sandlin");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.PAPERBACK];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2020);
    done();
  };
  const fetcher = new SYKMNomineeFetcher(award);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.skip("fetchData() Nero", (assert) => {
  // Setup.
  const award = MysteryAward.properties[MysteryAward.NERO];
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    assert.ok(books);
    assert.equal(books.length, 15);

    let i = 0;
    assert.equal(books[i].title, "Long Upon the Land");
    assert.equal(books[i].author, "Margaret Maron");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.CONTEMPORARY];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2015);

    i = books.length - 1;
    assert.equal(books[i].title, "Just Killing Time");
    assert.equal(books[i].author, "Julianne Holmes");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.FIRST];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2015);
    done();
  };
  const fetcher = new SYKMNomineeFetcher(award);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.test("fetchData() Shamus", (assert) => {
  // Setup.
  const award = MysteryAward.properties[MysteryAward.SHAMUS];
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    assert.ok(books);
    assert.equal(books.length, 25);

    let i = 0;
    assert.equal(books[i].title, "Lost Tomorrows");
    assert.equal(books[i].author, "Matt Coyle");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.HARDCOVER];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2020);

    i = books.length - 1;
    assert.equal(books[i].title, "Only to Sleep: A Philip Marlowe Novel");
    assert.equal(books[i].author, "Lawrence Osborne");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.FIRST];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2019);
    done();
  };
  const fetcher = new SYKMNomineeFetcher(award);

  // Run.
  fetcher.fetchData().then(callback);
});

const SYKMNomineeFetcherTest = {};
export default SYKMNomineeFetcherTest;
