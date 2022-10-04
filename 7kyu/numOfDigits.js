/* 
Determine the total number of digits in the integer (n>=0) given as input to the function. 
For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to 
avoid overflows/underflows.

All inputs will be valid.
*/
// P: Takes in an integer
// R: Returns an integer
// E:
// numOfDigits(5) --> 1
// numOfDigits(12345) --> 5
// numOfDigits(9876543210) --> 10
// P:
function numOfDigits(number) {
  // change integer to string
  // get length

  return String(number).length;
}

console.log(numOfDigits(5));
console.log(numOfDigits(12345));
console.log(numOfDigits(9876543210));
