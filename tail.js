//const assertEqual = require('./assertEqual');

const tail = function(actual) {
  if (actual.length > 1) {
    let newArgs = actual.slice(1);
    return newArgs;
  } else {
    return undefined;
  }

};


module.exports = tail;