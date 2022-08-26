/* 
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
Square all numbers k (0 <= k <= n) between 0 and n.
Count the numbers of digits d used in the writing of all the k**2.
Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

*/

// P: Takes in two integers, n and d
// R: Retunrs an integer
// E:
// Examples:
// n = 10, d = 1
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// countDigits(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

// countDigits(5750, 0) --> 4700
// countDigits(11011, 2) --> 9481
// countDigits(12224, 8) --> 7733
// countDigits(11549, 1 --> 11905

function countDigits(n, d) {
  //get array k of numbers from 0 to n inclusive
  //square values in k
  //count number of d in k

  let k = [];
  for (let i = 0; i <= n; i++) {
    k.push(i ** 2);
  }

  return k
    .toString()
    .split("")
    .filter((str) => str == d).length;
}

console.log(countDigits(10, 1));
console.log(countDigits(25, 1));
console.log(countDigits(5750, 0));
console.log(countDigits(11011, 2));
console.log(countDigits(12224, 8));
console.log(countDigits(11549, 1));
