import MysteryAward from "../artifact/MysteryAward.js";

import Nomination from "./Nomination.js";

QUnit.module("Nomination");

QUnit.test("Nomination() 0", (assert) => {
  // Setup.
  const awardKey = MysteryAward.AGATHA;
  const award = MysteryAward.properties[awardKey];
  const categoryKey = award.categories.CONTEMPORARY;
  const category = award.categories.properties[categoryKey];
  assert.ok(category);
  const year = 2016;

  // Run.
  const result = new Nomination(award, category, year);

  // Verify.
  assert.ok(result);
  assert.equal(result.award, award);
  assert.equal(result.category, category);
  assert.equal(result.year, year);
  assert.ok(!result.isWinner);
});

QUnit.test("Nomination() 1", (assert) => {
  // Setup.
  const awardKey = MysteryAward.AGATHA;
  const award = MysteryAward.properties[awardKey];
  const categoryKey = award.categories.CONTEMPORARY;
  const category = award.categories.properties[categoryKey];
  assert.ok(category);
  const year = 2016;
  const isWinner = true;

  // Run.
  const result = new Nomination(award, category, year, isWinner);

  // Verify.
  assert.ok(result);
  assert.equal(result.award, award);
  assert.equal(result.category, category);
  assert.equal(result.year, year);
  assert.ok(result.isWinner);
});

const NominationTest = {};
export default NominationTest;
