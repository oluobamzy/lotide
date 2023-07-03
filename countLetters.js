const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  //present results in an object
  //loop through the sentence and count every item
  //count unique items
  const results = {};
  for (let item of sentence) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  return results;
};
module.exports = countLetters;
