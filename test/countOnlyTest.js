const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe('#countOnly', () => {
  it("returns 2 Fangs in list of names", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const actual = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    const expected = 2;
    assert.strictEqual(actual["Fang"], expected);
  });
});
