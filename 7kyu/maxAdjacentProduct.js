/* 
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent 
numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in 
the array.
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10  =  50 .
*/
// P: Takes in an array
// R: Returns an integer
// E:
// maxAdjacentProduct([1, 2, 3]) --> 6
// maxAdjacentProduct([1, 5, 10, 9]) --> 90
// maxAdjacentProduct([4, 12, 3, 1, 5]) --> 48
// maxAdjacentProduct([9, 5, 10, 2, 24, -1, -48]) --> 50
// maxAdjacentProduct([5, 6, -4, 2, 3, 2, -23]) --> 30
// maxAdjacentProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]) -->
//   -14
// maxAdjacentProduct([5, 1, 2, 3, 1, 4]) --> 6
// maxAdjacentProduct([1, 0, 1, 0, 1000]) --> 0
// maxAdjacentProduct([1, 2, 3, 0]) --> 6
// P:
function maxAdjacentProduct(array) {
  // loop through and multiply two adjacent values
  // compare that to value set to 0 initially
  // if greater set new value

  let product = array[0] * array[1];

  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] * array[i + 1] > product) {
      product = array[i] * array[i + 1];
    }
  }

  return product;
}

console.log(maxAdjacentProduct([1, 2, 3]));
console.log(maxAdjacentProduct([1, 5, 10, 9]));
console.log(maxAdjacentProduct([4, 12, 3, 1, 5]));
console.log(maxAdjacentProduct([9, 5, 10, 2, 24, -1, -48]));
console.log(maxAdjacentProduct([5, 6, -4, 2, 3, 2, -23]));
console.log(maxAdjacentProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));
console.log(maxAdjacentProduct([5, 1, 2, 3, 1, 4]));
console.log(maxAdjacentProduct([1, 0, 1, 0, 1000]));
console.log(maxAdjacentProduct([1, 2, 3, 0]));
