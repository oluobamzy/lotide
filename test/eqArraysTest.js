const assertEqual =require('../assertEqual');
const eqArrays = require('../eqArrays');
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["9", "6", 3], [1, "3", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);