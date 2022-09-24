/* 
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

// P: Takes in a string
// R: Returns an integer
// E:
// "a" --> 1
// P:

function getPosition(letter) {
  // change to lowercase
  // check code of letter - 96

  return `Position of alphabet: ${letter.toLowerCase().charCodeAt() - 96}`;
}

console.log(getPosition("a"));
