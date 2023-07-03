const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

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
module.exports = eqObjects;
