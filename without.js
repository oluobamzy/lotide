const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const without = function(arr1, arr2) {
  //check arr1 and arr2
  //return values in A that are not in B
  //Don't modify the original array
  let trueArr = []; let falseArr = [];
  for (let i = 0; i < arr1.length; i++) {
    arr2.includes(arr1[i]) ? trueArr.push(arr1[i]) : falseArr.push(arr1[i]);
  }
  return falseArr;
};
module.exports = without;
