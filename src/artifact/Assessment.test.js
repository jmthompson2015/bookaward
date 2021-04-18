import Assessment from "./Assessment.js";

QUnit.module("Assessment");

QUnit.test("Assessment properties Possible pick", (assert) => {
  const assessmentKey = Assessment.POSSIBLE_PICK;
  const assessment = Assessment.properties[assessmentKey];
  assert.equal(assessment.name, "Possible pick");
  assert.equal(assessment.value, assessmentKey);
});

QUnit.test("keys and values", (assert) => {
  // Setup.

  // Run.
  const result = Assessment.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(Assessment);

  // Verify.
  ownPropertyNames.forEach((key) => {
    const key2 = Assessment[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Assessment.properties[key2], `Missing value for key = ${key}`);
    }
  });

  result.forEach((value) => {
    const p = ownPropertyNames.filter((key) => Assessment[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  });
});

QUnit.test("keys()", (assert) => {
  // Run.
  const result = Assessment.keys();

  // Verify.
  assert.ok(result);
  const length = 7;
  assert.equal(result.length, length);
  assert.equal(result[0], "bookClubPick");
  assert.equal(result[length - 1], "read");
});

const AssessmentTest = {};
export default AssessmentTest;
