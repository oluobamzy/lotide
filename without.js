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
console.log(without([1, 2, 3], [1])); // => [2, 3])
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["mw", "you", "us"], ["us"]));
const words = ["hello", "welcome", "home"];
console.log(without(words, "home"));
console.log(assertArraysEqual(words, ["hello", "welcome", "home"]));