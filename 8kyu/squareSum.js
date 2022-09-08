/* 
Complete the square sum function so that it squares each number passed into it and then sums 
the results together.

*/

// P: Takes in an array, numbers
// R: Returns an integer
// E:
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
// P:

function squareSum(numbers) {
  // square each number
  // add up numbers

  return numbers.map((num) => num ** 2).reduce((acc, curr) => acc + curr, 0);
}

console.log(squareSum([1, 2, 2]));
