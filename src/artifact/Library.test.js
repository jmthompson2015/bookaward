import Library from "./Library.js";

QUnit.module("Library");

QUnit.test("Library properties DCL", function(assert)
{
   const statusKey = Library.DCL;
   const status = Library.properties[statusKey];
   assert.equal(status.name, "Douglas County Libraries");
   assert.equal(status.url, "http://www.douglascountylibraries.org");
   assert.equal(status.value, statusKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = Library.values();
   const ownPropertyNames = Object.getOwnPropertyNames(Library);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = Library[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(Library.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return Library[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("values()", function(assert)
{
   // Run.
   const result = Library.values();

   // Verify.
   assert.ok(result);
   const length = 4;
   assert.equal(result.length, length);
   assert.equal(result[0], "al");
   assert.equal(result[length - 1], "jcpl");

   const properties = Object.getOwnPropertyNames(Library);
   const count = properties.length - 1 - // properties
      1; // values
   assert.equal(result.length, count);
});

const LibraryTest = {};
export default LibraryTest;