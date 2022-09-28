/* 
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/
// P: Takes in an array of integers
// R: Returns an array with no odd numbers
// E:
// noOdds( [0, 1] ) --> [0]
// noOdds( [0, 1, 2, 3] ) --> [0, 2]
// P:
function noOdds(array) {
  // filter out odd numbers

  return array.filter((num) => num % 2 === 0);
}

console.log(noOdds([0, 1]));
console.log(noOdds([0, 1, 2, 3]));
