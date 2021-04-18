import SciFiAward from "../artifact/SciFiAward.js";

import NomineeFetcher from "./SFADBNomineeFetcher.js";

QUnit.module("SFADBNomineeFetcher");

QUnit.test("fetchData() British Fantasy", (assert) => {
  // Setup.
  const award = SciFiAward.properties[SciFiAward.BRITISH_FANTASY];
  const year = 2018;
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    assert.ok(books);
    assert.equal(books.length, 8);

    let i = 0;
    assert.equal(books[i].title, "The Ninth Rain");
    assert.equal(books[i].author, "Jen Williams");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.FANTASY];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2018);
    assert.ok(nominations[j].isWinner);

    i = books.length - 1;
    assert.equal(books[i].title, "Relics");
    assert.equal(books[i].author, "Tim Lebbon");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.HORROR];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2018);
    assert.ok(!nominations[j].isWinner);
    done();
  };
  const fetcher = new NomineeFetcher(award, year);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.test("fetchData() British SF", (assert) => {
  // Setup.
  const award = SciFiAward.properties[SciFiAward.BRITISH_SF];
  const year = 2019;
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    assert.ok(books);
    assert.equal(books.length, 5);

    let i = 0;
    assert.equal(books[i].title, "Embers of War");
    assert.equal(books[i].author, "Gareth L. Powell");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    const category = award.categories.properties[award.categories.NOVEL];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2019);
    assert.ok(nominations[j].isWinner);

    i = books.length - 1;
    assert.equal(books[i].title, "Rosewater");
    assert.equal(books[i].author, "Tade Thompson");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2019);
    assert.ok(!nominations[j].isWinner);
    done();
  };
  const fetcher = new NomineeFetcher(award, year);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.test("fetchData() Hugo", (assert) => {
  // Setup.
  const award = SciFiAward.properties[SciFiAward.HUGO];
  const year = 2019;
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    assert.ok(books);
    assert.equal(books.length, 6);

    let i = 0;
    assert.equal(books[i].title, "The Calculating Stars");
    assert.equal(books[i].author, "Mary Robinette Kowal");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    const category = award.categories.properties[award.categories.NOVEL];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2019);
    assert.ok(nominations[j].isWinner);

    i = books.length - 1;
    assert.equal(books[i].title, "Trail of Lightning");
    assert.equal(books[i].author, "Rebecca Roanhorse");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2019);
    assert.ok(!nominations[j].isWinner);
    done();
  };
  const fetcher = new NomineeFetcher(award, year);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.test("fetchData() Locus", (assert) => {
  // Setup.
  const award = SciFiAward.properties[SciFiAward.LOCUS];
  const year = 2019;
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    assert.ok(books);
    assert.equal(books.length, 20);

    let i = 0;
    assert.equal(books[i].title, "The Calculating Stars");
    assert.equal(books[i].author, "Mary Robinette Kowal");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    let category = award.categories.properties[award.categories.SF];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2019);

    i = books.length - 1;
    assert.equal(books[i].title, "Creatures of Want and Ruin");
    assert.equal(books[i].author, "Molly Tanzer");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    category = award.categories.properties[award.categories.FANTASY];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2019);
    done();
  };
  const fetcher = new NomineeFetcher(award, year);

  // Run.
  fetcher.fetchData().then(callback);
});

QUnit.test("fetchData() Nebula", (assert) => {
  // Setup.
  const award = SciFiAward.properties[SciFiAward.NEBULA];
  const year = 2019;
  const done = assert.async();
  const callback = ({ books, bookToNomination }) => {
    // Verify.
    assert.ok(true, "test resumed from async operation");
    assert.ok(books);
    assert.equal(books.length, 6);

    let i = 0;
    assert.equal(books[i].title, "The Calculating Stars");
    assert.equal(books[i].author, "Mary Robinette Kowal");
    let nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    let j = 0;
    assert.equal(nominations[j].award, award);
    const category = award.categories.properties[award.categories.NOVEL];
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2019);

    i = books.length - 1;
    assert.equal(books[i].title, "Witchmark");
    assert.equal(books[i].author, "C. L. Polk");
    nominations = bookToNomination[books[i]];
    assert.ok(nominations);
    assert.equal(nominations.length, 1);
    j = 0;
    assert.equal(nominations[j].award, award);
    assert.equal(nominations[j].category, category);
    assert.equal(nominations[j].year, 2019);
    done();
  };
  const fetcher = new NomineeFetcher(award, year);

  // Run.
  fetcher.fetchData().then(callback);
});

const SFADBNomineeFetcherTest = {};
export default SFADBNomineeFetcherTest;
