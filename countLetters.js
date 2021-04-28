const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const noSpaces = sentence.split(' ');
  const result = {};
  for (const letter of sentence) {
    if (result[letter]) {
      result[letter]++;
    } else result[letter] = 1;
  }
  return result;
};

const check = countLetters("This is a sentence.");

console.log(assertEqual(check["s"], 3));