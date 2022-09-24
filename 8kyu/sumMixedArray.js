/* 
Given an array of integers as strings and numbers, return the sum of 
the array values as if all were numbers.

Return your answer as a number.
*/

// P: Takes in a array of strings and numbers
// R: Returns an integer
// E:
// sumMixedArray([9, 3, "7", "3"]) --> 22
// sumMixedArray(["5", "0", 9, 3, 2, 1, "9", 6, 7]) --> 42
// sumMixedArray(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]) --> 41
// P:
function sumMixedArray(array) {
  // reduce
  // convert each element to number

  return array.reduce((acc, cur) => acc + +cur, 0);
}

console.log(sumMixedArray([9, 3, "7", "3"]));
console.log(sumMixedArray(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(sumMixedArray(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
