/* 
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, 
and returns that sum.

Assume that the input n will always be a positive integer.
*/
// P: Takes in an integer
// R: Returns an integer
// E:
// 1 --> 1
// 2 --> 9
// 3 --> 36
// 4 --> 100
// 10 --> 3025
// 123 --> 58155876
// P:
function sumCubes(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(Math.pow(i, 3));
  }

  return arr.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumCubes(1));
console.log(sumCubes(2));
console.log(sumCubes(3));
console.log(sumCubes(4));
console.log(sumCubes(10));
console.log(sumCubes(123));
