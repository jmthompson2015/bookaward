import MysteryAward from "./MysteryAward.js";

QUnit.module("MysteryAward");

QUnit.test("MysteryAward properties Agatha", (assert) => {
  const statusKey = MysteryAward.AGATHA;
  const status = MysteryAward.properties[statusKey];
  assert.equal(status.name, "Agatha");
  assert.equal(status.value, statusKey);
});

QUnit.test("keys and values", (assert) => {
  // Setup.

  // Run.
  const result = MysteryAward.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(MysteryAward);

  // Verify.
  R.forEach((key) => {
    const key2 = MysteryAward[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(
        MysteryAward.properties[key2],
        `Missing value for key = ${key}`
      );
    }
  }, ownPropertyNames);

  R.forEach((value) => {
    const p = ownPropertyNames.filter((key) => MysteryAward[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  }, result);
});

QUnit.test("keys()", (assert) => {
  // Run.
  const result = MysteryAward.keys();

  // Verify.
  assert.ok(result);
  const length = 6;
  assert.equal(result.length, length);
  assert.equal(R.head(result), MysteryAward.AGATHA);
  assert.equal(R.last(result), MysteryAward.SHAMUS);
});

const MysteryAwardTest = {};
export default MysteryAwardTest;
