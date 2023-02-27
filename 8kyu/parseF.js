/* 
Write function parseF which takes an input and returns a number or null if conversion is 
not possible. The input can be one of many different types so be aware.
*/
// P: Takes in an input
// R: Returns null or an integer
// E:
// parseF("1") --> 1.0
// P:
function parseF(s) {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

console.log(parseF("1"));
