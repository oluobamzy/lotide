const assertEqual = require('./assertEqual')
const head = function(actual){
  
  if(actual.length > 1 || actual.length === 1){
    return actual[0]
  }
  return undefined;
}

module.exports = head;