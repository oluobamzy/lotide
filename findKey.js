const assertEqual = require('./assertEqual');

const findKey = ((object,callback)=> {
  let result = ""; let tempResult = [];//declare an array to hold values from our callback

  for (let item in object) {//iterate through the object
    if (callback(object[item])) {//get objects that satisfy the callback condition
      tempResult.push(item);
    }
  }
  if (tempResult.length > 0) {//test for items not in the object
    result += tempResult[0];
    return result;
  } else {
    return "";
  }
});
module.exports = findKey;
