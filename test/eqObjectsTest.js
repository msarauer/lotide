const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {
  it("returns false from { a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }", () => {
    const actual = { a: { y: 0, z: 1 }, b: 2 };
    const expected = false;
    assert.deepEqual(eqObjects(actual, { a: 1, b: 2 }), expected);
  });
  it("returns true from { a: { z: { g: 8} }, b: 2 }, { a: { z: { g: 8} }, b: 2 }", () => {
    const actual = { a: { z: { g: 8} }, b: 2 };
    const expected = true;
    assert.deepEqual(eqObjects(actual, { a: { z: { g: 8} }, b: 2 }), expected);
  });
});
