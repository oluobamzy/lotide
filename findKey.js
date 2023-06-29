const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✔✔✔Assertion Passed: [${actual}] === [${expected}]`) : console.log(`❌❌❌Assertion Failed: [${actual}] !== [${expected}]`);
};

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

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");
const object1 = {
  "key1": { value: "abc" },
  "key2": { value: "def" },
  "key3": { value: "abc" },
  "key4": { value: "ghi" }
};

// Test 1: Callback returns true for value with 'abc', should return 'key1'
assertEqual(findKey(object1, item => item.value === "abc"), "key1");

// Test 2: Callback returns true for value with 'ghi', should return 'key4'
assertEqual(findKey(object1, item => item.value === "ghi"), "key4");

// Test 3: Callback returns true for value with 'xyz', should return an empty string
assertEqual(findKey(object1, item => item.value === "xyz"), "");

const object2 = {
  "a": { count: 0 },
  "b": { count: 1 },
  "c": { count: 3 },
  "d": { count: 2 }
};

// Test 4: Callback returns true for value with count greater than 2, should return 'c'
assertEqual(findKey(object2, item => item.count > 2), "c");

// Test 5: Callback returns true for value with count less than 0, should return an empty string
assertEqual(findKey(object2, item => item.count < 0), "");