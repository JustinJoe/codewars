/* 
Complete the function which converts a binary number (given as a string) to a decimal number.
*/
// P: Takes in an integer
// R: Returns an integer
// E:
// "1" --> 1
// "0" --> 0
// "1001001" --> 73
// P:
function binToDec(bin) {
  // convert to integer
  // convert to decimal
  return parseInt(bin, 2);
}

console.log(binToDec("1"));
console.log(binToDec("0"));
console.log(binToDec("1001001"));
