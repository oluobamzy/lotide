const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  //push each item into an array;
  //report the index of each occurence
  let newStrArr = sentence.split("");
  let strArr = [];
  for (let i = 0; i < newStrArr.length; i++) {
    if (newStrArr[i] !== " ") {
      strArr.push(newStrArr[i]);
    }
  }
  for (let j = 0; j < strArr.length; j++) {
    if (results[strArr[j]]) {
      results[strArr[j]].push(j);
    } else {
      results[strArr[j]] = [j];
    }
  }
  return results;
};
module.exports = letterPositions;
