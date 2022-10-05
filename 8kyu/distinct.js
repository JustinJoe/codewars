/* 
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/
// P: Takes in an array
// R: Returns an array
// E:
// distinct([1]) --> [1]
// distinct([1,2]) --> [1,2]
// distinct([1,1,2]) --> [1,2]
// P:
function distinct(array) {
  // return unique array

  return [...new Set(array)];
}

console.log(distinct([1]));
console.log(distinct([1, 2]));
console.log(distinct([1, 1, 2]));
