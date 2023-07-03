const assertEqual = require('./assertEqual');

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
module.exports = eqArrays;
