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
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));