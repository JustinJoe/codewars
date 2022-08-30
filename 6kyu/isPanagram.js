/* 
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because 
it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
Ignore numbers and punctuation.
*/

// P: Takes in a string
// R: Returns a boolean
// E:
// isPanagram("This is not a pangram.") --> false;
// isPanagram("The quick brown fox jumps over the lazy dog") --> true
// P:

function isPanagram(string) {
  // convert to lowercase
  // split alphabets (as a string) into characters
  // check if every char in alphabet is in string

  string = string.toLowerCase();

  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((char) => string.indexOf(char) !== -1);
}

console.log(isPanagram("This is not a pangram."));
console.log(isPanagram("The quick brown fox jumps over the lazy dog"));
