// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (const key of obj1Keys) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])){
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;  
  if (eqObjects(obj1, obj2)) {
    console.log(`👌👌👌 Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};


//TEST
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false