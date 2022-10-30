/* 
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the 
second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
*/
// P: Takes in an array of integers
// R: Returns an array of two integers
// E:
// countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) --> [10, -65]
// countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]) --> [8, -50];
// P:
function countPositivesSumNegatives(input) {
  if (input === null) return [];
  let count = input.filter((num) => num > 0).length;
  let sum = input.filter((num) => num < 0).reduce((acc, cur) => +acc + +cur, 0);
  return count === 0 && sum === 0 ? [] : [count, sum];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
