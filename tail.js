const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✔✔✔Assertion Passed: [${actual}] === [${expected}]`) : console.log(`❌❌❌Assertion Failed: [${actual}] !== [${expected}]`);
};

const tail = function(actual) {
  if (actual.length > 1) {
    let newArgs = actual.slice(1);

    console.log(newArgs);
    return newArgs;
  } else {
    return undefined;
  }

};

// TEST CODE

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
/*assertEqual(result, ["Lighthouse", "Labs"]);//=> will always fail!
//TestCase:Check the original array */
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!