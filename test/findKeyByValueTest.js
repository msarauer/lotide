const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("drama for The Wire", () => {
    const actual = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const expected = "drama";
    assert.strictEqual(findKeyByValue(actual, "The Wire"), expected);
  });

});