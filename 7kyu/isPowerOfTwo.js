/* 
Complete the function isPowerOfTwo (or equivalent, depending on your language) that 
determines if a given non-negative integer is a power of two. From the corresponding 
Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of 
exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Examples
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is 
not a power of 2.
*/
// P: Takes in an integer
// R: Returns a boolean
// E:
// isPowerOfTwo(0) // -> false
// isPowerOfTwo(1) // -> true
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// P:
function isPowerOfTwo(num) {
  return num == 1 ? true : num < 1 ? false : isPowerOfTwo(num / 2);
}

console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(1024));
console.log(isPowerOfTwo(4096));
console.log(isPowerOfTwo(333));
