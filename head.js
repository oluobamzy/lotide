const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✔✔✔Assertion Passed: [${actual}] === [${expected}]`) : console.log(`❌❌❌Assertion Failed: [${actual}] !== [${expected}]`);
};

const head = function(actual){
  
  if(actual.length > 1 || actual.length === 1){
    return actual[0]
  }
  return undefined;
}

//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), 5);