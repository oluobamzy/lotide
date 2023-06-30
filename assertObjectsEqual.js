const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✔✔✔Assertion Passed: [${actual}] === [${expected}]`) : console.log(`❌❌❌Assertion Failed: [${actual}] !== [${expected}]`);
};

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
const eqObjects = function(object1, object2) {
  //they have the same number of keys
  //each key have the same values
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  let result = false;
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let i of object1Keys) {


    if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
      let arrCompare = eqArrays(object1[i], object2[i]);
      if (arrCompare) {
        result = true;
      }
    } else if (object1[i] === object2[i]) {
      result = true;
    }


  }
  return result;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let output = eqObjects(actual, expected);
  
  return output;


};
const obj1 = {
  a:[1,2],
  b:2
};
const obj2 = {
  a:[2,1],
  b:2
}
const result = assertObjectsEqual(obj1,obj2)
assertEqual(result,true);
