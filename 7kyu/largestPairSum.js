/* 
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

Input sequence contains minimum two elements and every element is an integer.
*/
// P: Takes in an array
// R: Returns an integer
// E:
// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// P:
function largestPairSum(array) {
  // sort in ascending order
  // add last two numbers

  array = array.sort((a, b) => b - a);
  return array[0] + array[1];
}

console.log(largestPairSum([10, 14, 2, 23, 19]));
console.log(largestPairSum([99, 2, 2, 23, 19]));
