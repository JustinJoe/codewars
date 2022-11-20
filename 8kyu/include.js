/* 
Create a method that accepts a list and an item, and returns true if the item belongs 
to the list, otherwise false.
*/
// P: Takes in an array and an integer
// R: Returns a boolean
// E:
// include([1,2,3,4], 3) --> true
// include([1,2,4,5], 3) --> false
// include([], 3) -->        false
// P:
function include(arr, item) {
  return arr.includes(item);
}

console.log(include([1, 2, 3, 4], 3));
console.log(include([1, 2, 4, 5], 3));
console.log(include([], 3));
