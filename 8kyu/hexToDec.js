/* 
Complete the function which converts hex number (given as a string) to a decimal number.
*/
// P: Takes in a string
// R: Returns a number
// E:
// hexToDec("1") --> 1;
// hexToDec("a") --> 10;
// hexToDec("10") --> 16;
// hexToDec("FF") --> 255;
// hexToDec("-C") --> -12;
// P:
function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

console.log(hexToDec("1"));
console.log(hexToDec("a"));
console.log(hexToDec("10"));
console.log(hexToDec("FF"));
console.log(hexToDec("-C"));
