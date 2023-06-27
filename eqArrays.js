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
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["9", "6", 3], [1, "3", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);