const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const without = require('./without');
const takeUntil = require('./takeUntil');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey')
const eqObjects = require('./eqObjects');
const countOnly = require('./countOnly');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertEqual = require('./assertEqual');

module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  without,
  takeUntil,
  findKey,
  findKeyByValue,
  eqObjects,
  countOnly,
  assertArraysEqual,
  assertObjectsEqual,
  assertEqual
};