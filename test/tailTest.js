const tail = require('../tail');
const assert = require('chai').assert;

// TEST CODE
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const actual = ["Yo Yo", "Lighthouse", "Labs"];
    const expected = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(actual), expected);
  });
});




