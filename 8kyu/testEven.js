/* 
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.
*/

// P: Takes in an integer
// R: Returns a boolean
// E:
// testEven(0) --> true
// testEven(0.5) --> false
// testEven(1) --> false
// testEven(2) --> true
// testEven(-4) --> true
// P:
function testEven(num) {
  // num modulo 2

  return !(num % 2);
}

console.log(testEven(0));
console.log(testEven(0.5));
console.log(testEven(1));
console.log(testEven(2));
console.log(testEven(-4));
