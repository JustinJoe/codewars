/* 
Write a function getChar() which takes a number and returns the corresponding 
ASCII char for that value.

*/
// P: Takes in an integer
// R: Returns a string
// E:
// getChar(55) --> "7"
// getChar(62) --> ">"
// getChar(65) --> "A"
// P:
function getChar(num) {
  // get ASCII with String.fromCharCode()

  return String.fromCharCode(num);
}

console.log(getChar(55));
console.log(getChar(62));
console.log(getChar(65));
