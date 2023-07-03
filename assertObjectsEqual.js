const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let output = eqObjects(actual, expected);
  
  return output;


};
module.exports = assertObjectsEqual;

