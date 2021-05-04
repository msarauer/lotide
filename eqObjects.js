// FUNCTION IMPLEMENTATION

const eqArrays = require('./eqArrays');

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
    } else if ( typeof obj1[key] === "object") {
        if (!eqObjects(obj1[key], obj2[key])) {
          return false;
        }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
