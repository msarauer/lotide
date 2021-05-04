const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('#letterPositions', () => {
  it("returns [1] for ('hello').e", () => {
    const actual = "hello"
    const expected = [1];
    assert.deepEqual(letterPositions(actual).e, expected);
  });
});
