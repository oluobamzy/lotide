const assertEqual = require('./assertEqual');
const findKeyByValue = function(obj, val) {
  //access obj value
  //compare it with given value
  //return the key
  

  for (let item in obj) {
    
    if (obj[item] === val) {
      return item;
    }
  }


};
module.exports = findKeyByValue;
