/* 
Create a function that accepts a list/array and a number n, and returns a 
list/array of the first n elements from the list/array.
*/
// P: Takes in an array and an integer
// R: Returns an array with the first n elements
// E:
// getFirstN([0, 1, 2, 3, 5, 8, 13], 3) --> [0, 1, 2];
// P:
function getFirstN(arr, n) {
  return arr.slice(0, n);
}

console.log(getFirstN([0, 1, 2, 3, 5, 8, 13], 3));
