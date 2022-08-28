/* 
There is an array with some numbers. All numbers are equal except for one. Try to find it!

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/

// P: Takes in an array
// R: Returns a number
// E:
// findUniqueNumber([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniqueNumber([ 0, 0, 0.55, 0, 0 ]) === 0.55
// findUniqueNumber([ 1, 0, 0 ]) --> 1
// findUniqueNumber([ 0, 1, 0 ]) --> 1
// findUniqueNumber([ 0, 0, 1 ]) --> 1
// findUniqueNumber([ 1, 1, 1, 2, 1, 1 ]) --> 2
// findUniqueNumber([ 1, 1, 2, 1, 1 ]) --> 2
// findUniqueNumber([ 3, 10, 3, 3, 3 ]) --> 10
// P:

function findUniqueNumber(array) {
  // sort array
  // check if first element is the same as the next
  // return last element if first element === second element

  array = array.sort((a, b) => a - b);

  if (array[0] === array[1]) {
    return array[array.length - 1];
  }
  return array[0];
}

console.log(findUniqueNumber([1, 1, 1, 2, 1, 1]));
console.log(findUniqueNumber([0, 0, 0.55, 0, 0]));
console.log(findUniqueNumber([1, 0, 0]));
console.log(findUniqueNumber([0, 1, 0]));
console.log(findUniqueNumber([0, 0, 1]));
console.log(findUniqueNumber([1, 1, 1, 2, 1, 1]));
console.log(findUniqueNumber([1, 1, 2, 1, 1]));
console.log(findUniqueNumber([3, 10, 3, 3, 3]));
