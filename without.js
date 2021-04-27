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

const without = function(source, itemsToRemove) {
  let modifiedArray = [];
  for (let i = 0; i < source.length; i++) {
    let isIn = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        isIn = true;
      }
    }
    if (!isIn) modifiedArray.push(source[i]);
  }
  return modifiedArray;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["world"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);