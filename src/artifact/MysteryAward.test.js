import MysteryAward from "./MysteryAward.js";

QUnit.module("MysteryMysteryAward");

QUnit.test("MysteryMysteryAward properties Agatha", assert => {
  const statusKey = MysteryAward.AGATHA;
  const status = MysteryAward.properties[statusKey];
  assert.equal(status.name, "Agatha");
  assert.equal(status.value, statusKey);
});

QUnit.test("keys and values", assert => {
  // Setup.

  // Run.
  const result = MysteryAward.values();
  const ownPropertyNames = Object.getOwnPropertyNames(MysteryAward);

  // Verify.
  ownPropertyNames.forEach(key => {
    const key2 = MysteryAward[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(MysteryAward.properties[key2], `Missing value for key = ${key}`);
    }
  });

  result.forEach(value => {
    const p = ownPropertyNames.filter(key => MysteryAward[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  });
});

QUnit.test("values()", assert => {
  // Run.
  const result = MysteryAward.values();

  // Verify.
  assert.ok(result);
  const length = 6;
  assert.equal(result.length, length);
  assert.equal(result[0], "agatha");
  assert.equal(result[length - 1], "shamus");

  const properties = Object.getOwnPropertyNames(MysteryAward);
  const count =
    properties.length -
    1 - // properties
    1 - // values
    1; // findByName
  assert.equal(result.length, count);
});

const MysteryAwardTest = {};
export default MysteryAwardTest;
