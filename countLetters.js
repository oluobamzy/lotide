const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✔✔✔Assertion Passed: [${actual}] === [${expected}]`) : console.log(`❌❌❌Assertion Failed: [${actual}] !== [${expected}]`);
};

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
const result1 = countLetters("lighthouselabs");
assertEqual(result1["l"], 2);