const map = (arr, cb) => {
  const results = [];
  for (let item of arr) {
    results.push(cb(item));
  }
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




const words = ["ground", "control", "to", "major", "tom"];


assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);

assertArraysEqual(map(words, word => word + "🎶"), ["ground🎶", "control🎶", "to🎶", "major🎶", "tom🎶"]);

assertArraysEqual(map(words, word => "hi"), ["hi", "hi", "hi", "hi", "hi"]);