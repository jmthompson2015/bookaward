import MysteryAward from "../artifact/MysteryAward.js";

import SYKMNomineeFetcher from "./SYKMNomineeFetcher.js";

QUnit.module("SYKMNomineeFetcher");

QUnit.test("fetchData() Agatha", assert => {
  // Setup.
  const award = MysteryAward.properties[MysteryAward.AGATHA];
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    assert.ok(books, "books");
    assert.ok(bookToNomination, "bookToNomination");
    assert.equal(books.length, 25);

    let i = 0;
    assert.equal(books[i].title, "Mardi Gras Murder");
    assert.equal(books[i].author, "Ellen Byron");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.CONTEMPORARY];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2018);
    assert.ok(nominations[j].isWinner);

    i = books.length - 1;
    assert.equal(books[i].title, "Protocol");
    assert.equal(books[i].author, "Kathleen Valenti");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.FIRST];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2017);
    assert.ok(!nominations[j].isWinner);
    done();
  };
  const fetcher = new SYKMNomineeFetcher(award);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.test("fetchData() Anthony", assert => {
  // Setup.
  const award = MysteryAward.properties[MysteryAward.ANTHONY];
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    assert.ok(books);
    assert.equal(books.length, 30);

    let i = 0;
    assert.equal(books[i].title, "Give Me Your Hand");
    assert.equal(books[i].author, "Megan Abbott");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.MYSTERY];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2019);

    i = books.length - 1;
    assert.equal(books[i].title, "Cast the First Stone");
    assert.equal(books[i].author, "James W. Ziskin");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.PAPERBACK];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2018);
    done();
  };
  const fetcher = new SYKMNomineeFetcher(award);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.test("fetchData() Barry", assert => {
  // Setup.
  const award = MysteryAward.properties[MysteryAward.BARRY];
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    assert.ok(books);
    assert.equal(books.length, 47);

    let i = 0;
    assert.equal(books[i].title, "November Road");
    assert.equal(books[i].author, "Lou Berney");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.NOVEL];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2019);

    i = books.length - 1;
    assert.equal(books[i].title, "The Old Man");
    assert.equal(books[i].author, "Thomas Perry");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.THRILLER];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2018);
    done();
  };
  const fetcher = new SYKMNomineeFetcher(award);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.skip("fetchData() Dagger", assert => {
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

QUnit.test("fetchData() Edgar", assert => {
  // Setup.
  const award = MysteryAward.properties[MysteryAward.EDGAR];
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    assert.ok(books);
    assert.equal(books.length, 32);

    let i = 0;
    assert.equal(books[i].title, "Down the River unto the Sea");
    assert.equal(books[i].author, "Walter Mosley");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.NOVEL];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2019);

    i = books.length - 1;
    assert.equal(books[i].title, "The Rules of Backyard Cricket");
    assert.equal(books[i].author, "Jock Serong");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.PAPERBACK];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2018);
    done();
  };
  const fetcher = new SYKMNomineeFetcher(award);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.skip("fetchData() Nero", assert => {
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

QUnit.test("fetchData() Shamus", assert => {
  // Setup.
  const award = MysteryAward.properties[MysteryAward.SHAMUS];
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    assert.ok(books);
    assert.equal(books.length, 30);

    let i = 0;
    assert.equal(books[i].title, "Wrong Light");
    assert.equal(books[i].author, "Matt Coyle");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.HARDCOVER];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2019);

    i = books.length - 1;
    assert.equal(books[i].title, "August Snow");
    assert.equal(books[i].author, "Stephen Mack Jones");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.FIRST];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2018);
    done();
  };
  const fetcher = new SYKMNomineeFetcher(award);

  // Run.
  fetcher.fetchData().then(callback);
});

const SYKMNomineeFetcherTest = {};
export default SYKMNomineeFetcherTest;
