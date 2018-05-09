import SciFiAward from "./SciFiAward.js";

QUnit.module("SciFiAward");

QUnit.test("SciFiAward properties Hugo", function(assert)
{
   const statusKey = SciFiAward.HUGO;
   const status = SciFiAward.properties[statusKey];
   assert.equal(status.name, "Hugo");
   assert.equal(status.value, statusKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = SciFiAward.values();
   const ownPropertyNames = Object.getOwnPropertyNames(SciFiAward);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = SciFiAward[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(SciFiAward.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return SciFiAward[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("values()", function(assert)
{
   // Run.
   const result = SciFiAward.values();

   // Verify.
   assert.ok(result);
   const length = 5;
   assert.equal(result.length, length);
   assert.equal(result[0], "britishFantasy");
   assert.equal(result[length - 1], "nebula");

   const properties = Object.getOwnPropertyNames(SciFiAward);
   const count = properties.length - 1 - // properties
      1 - // values
      1; // findByName
   assert.equal(result.length, count);
});

const SciFiAwardTest = {};
export default SciFiAwardTest;