import Assessment from "./Assessment.js";

QUnit.module("Assessment");

QUnit.test("Assessment properties Possible pick", function(assert)
{
   const assessmentKey = Assessment.POSSIBLE_PICK;
   const assessment = Assessment.properties[assessmentKey];
   assert.equal(assessment.name, "Possible pick");
   assert.equal(assessment.value, assessmentKey);
});

QUnit.test("keys and values", function(assert)
{
   // Setup.

   // Run.
   const result = Assessment.values();
   const ownPropertyNames = Object.getOwnPropertyNames(Assessment);

   // Verify.
   ownPropertyNames.forEach(function(key)
   {
      const key2 = Assessment[key];

      if (key !== "properties" && typeof key2 === "string")
      {
         assert.ok(Assessment.properties[key2], "Missing value for key = " + key);
      }
   });

   result.forEach(function(value)
   {
      const p = ownPropertyNames.filter(function(key)
      {
         return Assessment[key] === value;
      });

      assert.equal(p.length, 1, "Missing key for value = " + value);
   });
});

QUnit.test("values()", function(assert)
{
   // Run.
   const result = Assessment.values();

   // Verify.
   assert.ok(result);
   const length = 7;
   assert.equal(result.length, length);
   assert.equal(result[0], "bookClubPick");
   assert.equal(result[length - 1], "read");

   const properties = Object.getOwnPropertyNames(Assessment);
   const count = properties.length - 1 - // properties
      1; // values
   assert.equal(result.length, count);
});

const AssessmentTest = {};
export default AssessmentTest;