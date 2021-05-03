const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);