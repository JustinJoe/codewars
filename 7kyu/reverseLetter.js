/* 
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string

*/
// P: Takes in a string
// R: Returns a string
// E:
// reverseLetter("krishan") --> "nahsirk"
// reverseLetter("ultr53o?n") --> "nortlu"
// reverseLetter("ab23c") --> "cba"
// reverseLetter("krish21an") --> "nahsirk"
// P:
function reverseLetter(str) {
  // split string
  // filter alphabets
  // reverse
  // join

  return [...str]
    .filter((letter) => letter.match(/[a-zA-Z]/))
    .reverse()
    .join("");
}

console.log(reverseLetter("krishan"));
console.log(reverseLetter("ultr53o?n"));
console.log(reverseLetter("ab23c"));
console.log(reverseLetter("krish21an"));
