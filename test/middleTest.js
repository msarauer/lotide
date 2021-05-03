const middle = require('../middle');
const assert = require('chai').assert;

// TEST CODE
describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    const actual = [1, 2, 3, 4, 5];
    const expected = [3];
    assert.deepEqual(middle(actual), expected);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    const actual = [1, 2, 3, 4, 5, 6];
    const expected = [3, 4];
    assert.deepEqual(middle(actual), expected);
  })
});



// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);