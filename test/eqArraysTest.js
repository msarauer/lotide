const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it("returns false from [[2, 3], [4]], [[2, 3], 4]", () => {
    const actual = [[2, 3], [4]];
    const expected = false;
    assert.deepEqual(eqArrays(actual, [[2, 3], 4]), expected);
  });
});
