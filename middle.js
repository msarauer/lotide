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

const middle = function(arr) {
  const midIndex = (arr.length / 2);
  const midArray = [];
  if (midIndex % 1 === 0) {
    midArray.push(arr[midIndex - 1], arr[midIndex]);
  } else midArray.push((arr[Math.floor(midIndex)]));
  return midArray;
};

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);