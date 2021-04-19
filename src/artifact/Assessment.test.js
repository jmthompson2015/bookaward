import Assessment from "./Assessment.js";

QUnit.module("Assessment");

QUnit.test("Assessment properties Possible pick", (assert) => {
  const assessmentKey = Assessment.POSSIBLE_PICK;
  const assessment = Assessment.properties[assessmentKey];
  assert.equal(assessment.name, "Possible pick");
  assert.equal(assessment.key, assessmentKey);
});

QUnit.test("keys and values", (assert) => {
  // Setup.

  // Run.
  const result = Assessment.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(Assessment);

  // Verify.
  R.forEach((key) => {
    const key2 = Assessment[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Assessment.properties[key2], `Missing value for key = ${key}`);
    }
  }, ownPropertyNames);

  R.forEach((value) => {
    const p = ownPropertyNames.filter((key) => Assessment[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  }, result);
});

QUnit.test("keys()", (assert) => {
  // Run.
  const result = Assessment.keys();

  // Verify.
  assert.ok(result);
  const length = 7;
  assert.equal(result.length, length);
  assert.equal(R.head(result), Assessment.BOOK_CLUB_PICK);
  assert.equal(R.last(result), Assessment.READ);
});

const AssessmentTest = {};
export default AssessmentTest;
