const assertEqual = require('../assertEqual');
const tail = require('../tail');
// TEST CODE

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
/*assertEqual(result, ["Lighthouse", "Labs"]);//=> will always fail!
//TestCase:Check the original array */
const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
