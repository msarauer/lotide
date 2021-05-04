const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#flatten', () => {
  it("returns [1, 2, 3, 4, a, 6] from [1, 2, [3, 4], a, [6].", () => {
    const actual = [1, 2, [3, 4], "a", [6]];
    const expected = [1, 2, 3, 4, "a", 6];
    assert.deepEqual(flatten(actual), expected);
  });
});
