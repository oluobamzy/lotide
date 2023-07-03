const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
//count array items
//if arrItems is less than 3, return []
//if length is even, return the two middle elements
//if length is odd, return the most middle item
  let middleElementArray = [];
  if (arr.length < 3) {
    middleElementArray.push([]);
  } else if (arr.length % 2 === 0) {
    middleElementArray.push(arr[(arr.length / 2) - 1], arr[arr.length / 2]);
  } else if (arr.length % 2 === 1) {
    middleElementArray.push(arr[Math.floor(arr.length / 2)]);
  }
  return middleElementArray;

};
module.exports = middle;
