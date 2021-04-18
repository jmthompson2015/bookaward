import SciFiAward from "./SciFiAward.js";

QUnit.module("SciFiAward");

QUnit.test("SciFiAward properties Hugo", (assert) => {
  const statusKey = SciFiAward.HUGO;
  const status = SciFiAward.properties[statusKey];
  assert.equal(status.name, "Hugo");
  assert.equal(status.value, statusKey);
});

QUnit.test("keys and values", (assert) => {
  // Setup.

  // Run.
  const result = SciFiAward.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(SciFiAward);

  // Verify.
  ownPropertyNames.forEach((key) => {
    const key2 = SciFiAward[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(SciFiAward.properties[key2], `Missing value for key = ${key}`);
    }
  });

  result.forEach((value) => {
    const p = ownPropertyNames.filter((key) => SciFiAward[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  });
});

QUnit.test("keys()", (assert) => {
  // Run.
  const result = SciFiAward.keys();

  // Verify.
  assert.ok(result);
  const length = 5;
  assert.equal(result.length, length);
  assert.equal(result[0], "britishFantasy");
  assert.equal(result[length - 1], "nebula");
});

const SciFiAwardTest = {};
export default SciFiAwardTest;
