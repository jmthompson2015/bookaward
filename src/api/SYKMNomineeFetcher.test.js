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
    assert.equal(books.length, 46, `books.length = ${books.length}`);

    let i = 0;
    assert.equal(books[i].title, "A World of Curiosities");
    assert.equal(books[i].author, "Louise Penny");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.CONTEMPORARY];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2022);
    assert.ok(nominations[j].isWinner);

    i = books.length - 1;
    assert.equal(books[i].title, "Murder Most Sweet");
    assert.equal(books[i].author, "Laura Jensen Walker");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.FIRST];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2020);
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
    assert.equal(books.length, 52, `books.length = ${books.length}`);

    let i = 0;
    assert.equal(books[i].title, "Like a Sister");
    assert.equal(books[i].author, "Kellye Garrett");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.HARDCOVER];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2023);

    i = books.length - 1;
    assert.equal(books[i].title, "Dirty Old Town");
    assert.equal(books[i].author, "Gabriel Valjan");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.PAPERBACK3];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2021);
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
    assert.equal(books.length, 66, `books.length = ${books.length}`);

    let i = 0;
    assert.equal(books[i].title, "The Accomplice");
    assert.equal(books[i].author, "Steve Cavanag");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.MYSTERY];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2023);

    i = books.length - 1;
    assert.equal(books[i].title, "The Wild One");
    assert.equal(books[i].author, "Nick Petrie");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.THRILLER];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2021);
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
    assert.equal(books.length, 48, `books.length = ${books.length}`);

    let i = 0;
    assert.equal(books[i].title, "Notes on an Execution");
    assert.equal(books[i].author, "Danya Kukafka");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.MYSTERY];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2023);

    i = books.length - 1;
    assert.equal(books[i].title, "East of Hounslow");
    assert.equal(books[i].author, "Khurrum Rahman");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.PAPERBACK];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2021);
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
    assert.equal(books.length, 44, `books.length = ${books.length}`);

    let i = 0;
    assert.equal(books[i].title, "The Wheel of Doll");
    assert.equal(books[i].author, "Jonathan Ames");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.HARDCOVER];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2023);

    i = books.length - 1;
    assert.equal(books[i].title, "Winter Counts");
    assert.equal(books[i].author, "David Heska Wanbli Weiden");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.FIRST];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2021);
    done();
  };
  const fetcher = new SYKMNomineeFetcher(award);

  // Run.
  fetcher.fetchData().then(callback);
});

const SYKMNomineeFetcherTest = {};
export default SYKMNomineeFetcherTest;
