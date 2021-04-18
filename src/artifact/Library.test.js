import Library from "./Library.js";

QUnit.module("Library");

QUnit.test("Library properties DCL", (assert) => {
  const statusKey = Library.DCL;
  const status = Library.properties[statusKey];
  assert.equal(status.name, "Douglas County Libraries");
  assert.equal(status.url, "http://www.douglascountylibraries.org");
  assert.equal(status.value, statusKey);
});

QUnit.test("keys and values", (assert) => {
  // Setup.

  // Run.
  const result = Library.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(Library);

  // Verify.
  ownPropertyNames.forEach((key) => {
    const key2 = Library[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Library.properties[key2], `Missing value for key = ${key}`);
    }
  });

  result.forEach((value) => {
    const p = ownPropertyNames.filter((key) => Library[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  });
});

QUnit.test("keys()", (assert) => {
  // Run.
  const result = Library.keys();

  // Verify.
  assert.ok(result);
  const length = 4;
  assert.equal(result.length, length);
  assert.equal(result[0], "al");
  assert.equal(result[length - 1], "jcpl");
});

const LibraryTest = {};
export default LibraryTest;
