const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  return results;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`👌👌👌 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const test = "hello";
assertArraysEqual(letterPositions(test)["h"], [0]);
assertArraysEqual(letterPositions(test)["e"], [1]);
assertArraysEqual(letterPositions(test)["l"], [2, 3]);
assertArraysEqual(letterPositions(test)["o"], [4]);