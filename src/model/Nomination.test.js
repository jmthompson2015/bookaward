import MysteryAward from "../artifact/MysteryAward.js";

import Nomination from "./Nomination.js";

QUnit.module("Nomination");

QUnit.test("Nomination()", function(assert)
{
   // Setup.
   var awardKey = MysteryAward.AGATHA;
   var award = MysteryAward.properties[awardKey];
   var categoryKey = award.categories.CONTEMPORARY;
   var category = award.categories.properties[categoryKey];
   assert.ok(category);
   var year = 2016;
   var isWinner = false;

   // Run.
   var result = new Nomination(award, category, year, isWinner);

   // Verify.
   assert.ok(result);
   assert.equal(result.award(), award);
   assert.equal(result.category(), category);
   assert.equal(result.year(), year);
   assert.ok(!result.isWinner());
});

var NominationTest = {};
export default NominationTest;