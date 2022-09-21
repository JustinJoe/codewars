/* 
This kata is about multiplying a given number by eight if it is an even number and by nine 
otherwise.
*/

// P: Takes in an integer
// R: Returns an integer
// E:
// multiply(2) --> 16
// multiply(1) --> 9
// multiply(8) --> 64
// multiply(4) --> 32
// multiply(5) --> 45
// P:
function multiply(num) {
  // if num % 2 == 0 ? num * 8 : num * 9

  return num % 2 ? num * 9 : num * 8;
}

console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(8));
console.log(multiply(4));
console.log(multiply(5));
