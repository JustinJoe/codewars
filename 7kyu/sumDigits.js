/* 
Write a function named sumDigits which takes a number as input and returns the sum of 
the absolute value of each of the number's decimal digits.
Let's assume that all numbers in the input will be integer values.
*/
// P: Takes in an integer
// R: Returns an integer
// E:
// 10 --> 1
// 99 --> 18
// -32 --> 5
// P:
function sumDigits(number) {
  return String(number)
    .split("")
    .filter((num) => /\d/.test(num))
    .reduce((acc, cur) => +acc + +cur, 0);
}

console.log(sumDigits(10));
console.log(sumDigits(99));
console.log(sumDigits(-32));
