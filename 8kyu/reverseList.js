/* 
In this kata you will create a function that takes in a list and returns a list with the 
reverse order.
*/
// P: Takes in an array
// R: Returns an array
// E:
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]
// P:
function reverseArray(array) {
  // reverse()
  return array.reverse();
}

console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray([9, 2, 0, 7]));
