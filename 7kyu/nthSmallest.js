/* 
Given an array/list of integers, find the Nth smallest element in the array.

Notes
Array/list size is at least 3.
Array/list's numbers could be a mixture of positives , negatives and zeros.
Repetition in array/list's numbers could occur, so don't remove duplications.
*/
// P: Takes in an array and an integer
// R: Returns an integer
// E:
// nthSmallest(                 [3,1,2], 2) -->  2
// nthSmallest(        [15,20,7,10,4,3], 3) -->  7
// nthSmallest(          [-5,-1,-6,-18], 4) --> -1
// nthSmallest([-102,-16,-1,-2,-367,-9], 5) --> -2
// nthSmallest(      [2,169,13,-5,0,-1], 4) -->  2
// nthSmallest(           [2,1,3,3,1,2], 3) -->  2
// P:
function nthSmallest(arr, pos) {
  return arr.sort((a, b) => a - b)[pos - 1];
}

console.log(nthSmallest([3, 1, 2], 2));
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3));
console.log(nthSmallest([-5, -1, -6, -18], 4));
console.log(nthSmallest([-102, -16, -1, -2, -367, -9], 5));
console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4));
console.log(nthSmallest([2, 1, 3, 3, 1, 2], 3));
