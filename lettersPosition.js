const eqArrays = function(arr1, arr2) {
  let trueArr = []; let falseArr = []; let result;
  for (let i = 0; i < arr1.length; i++) {

    // console.log("arr1 " + arr1[i], "arr2 " + arr2[i])
    arr1[i] === arr2[i] ? trueArr.push(i) : falseArr.push(i);
  }
  //console.log(trueArr,falseArr)
  if (falseArr.length === 0) {
    result = true;
  } else {
    result = false;
  }

  return result;
};

const assertArraysEqual = function(arr1, arr2) {
  let output = eqArrays(arr1, arr2);
  return output;
};

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
console.log(letterPositions("hello labs"));
console.log(assertArraysEqual(letterPositions("hello").h, [0]));