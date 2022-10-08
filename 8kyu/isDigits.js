/* 
Given a string s, write a method (function) that will return true if its a valid single 
integer or floating number or false if its not.

*/
// P: Takes in a string
// R: Returns a boolean
// E:
// isDigit("3") --> true
// isDigit("  3  ") --> true
// isDigit("-3.23") --> true
// isDigit("3-4") --> false
// isDigit("  3   5") --> false
// isDigit("3 5") --> false
// isDigit("zero") --> false
// P:
function isDigit(string) {
  // parseFloat(string) == string
  return string == parseFloat(string);
}

console.log(isDigit("3"));
console.log(isDigit("  3  "));
console.log(isDigit("-3.23"));
console.log(isDigit("3-4"));
console.log(isDigit("  3   5"));
console.log(isDigit("3 5"));
console.log(isDigit("zero"));
