const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  let output = eqArrays(arr1, arr2);
  return output;
};

module.exports = assertArraysEqual;