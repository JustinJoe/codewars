/* 
DESCRIPTION:
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return 
false otherwise.

Examples
*/

// P: Takes in two strings, test and original
// R: Returns a boolean
// E:
// anagramDetector("foefet", "toffee") --> true
// anagramDetector("Buckethead", "DeathCubeK") --> true
// P:

function anagramDetector(test, original) {
  // lowercase both parameters
  // split both, sort and join
  // check if both are same

  test = test.toLowerCase().split("").sort().join("");
  original = original.toLowerCase().split("").sort().join("");

  return test === original;
}

console.log(anagramDetector("foefet", "toffee"));
console.log(anagramDetector("Buckethead", "DeathCubeK"));
