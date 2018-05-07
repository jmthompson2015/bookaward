import MysteryAward from "./MysteryAward.js";

QUnit.module("MysteryMysteryAward");

QUnit.test("MysteryMysteryAward properties Agatha", function(assert)
{
   var statusKey = MysteryAward.AGATHA;
   var status = MysteryAward.properties[statusKey];
   assert.equal(status.name, "Agatha");
   assert.equal(status.value, statusKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   var result = MysteryAward.values();
   var ownPropertyNames = Object.getOwnPropertyNames(MysteryAward);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      var key2 = MysteryAward[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(MysteryAward.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      var p = ownPropertyNames.filter(function(key)
      {
         return MysteryAward[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("values()", function(assert)
{
   // Run.
   var result = MysteryAward.values();

   // Verify.
   assert.ok(result);
   var length = 7;
   assert.equal(result.length, length);
   assert.equal(result[0], "agatha");
   assert.equal(result[length - 1], "shamus");

   var properties = Object.getOwnPropertyNames(MysteryAward);
   var count = properties.length - 1 - // properties
      1 - // values
      1; // findByName
   assert.equal(result.length, count);
});

var MysteryAwardTest = {};
export default MysteryAwardTest;