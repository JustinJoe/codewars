/* 
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of 
all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By 
convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 
throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException 
(Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) 
or return -1 (C).
*/
// P: Takes in an integer
// R: Returns an integer
// E:
// factorial(0) --> 1
// factorial(1) --> 1
// factorial(2) --> 2
// factorial(3) --> 6
// factorial(13) --> The range cannot be less than 0 or greater than 12

function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError("The range cannot be less than 0 or greater than 12");
  } else if (n === 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(13));