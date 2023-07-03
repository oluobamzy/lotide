const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  // ...loop over every array
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result = array.slice(0, i);
    }
  }

  return result;

};
module.exports = takeUntil;
