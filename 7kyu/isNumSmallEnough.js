/* 
You will be given an array and a limit value. You must check that all values in the array are 
below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/

// P: Takes in an array of integers - arr, and an integer - limit
// R: Returns a boolena
// E:
// console.log(isNumSmallEnough([66, 101], 200)) --> true
// console.log(isNumSmallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)) --> false
// console.log(isNumSmallEnough([101, 45, 75, 105, 99, 107], 107)) --> true
// console.log(isNumSmallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)) --> true

// P:

function isNumSmallEnough(arr, limit) {
  // loop through arr
  // is every num in arr <= limit?

  return arr.every((num) => num <= limit);
}

console.log(isNumSmallEnough([66, 101], 200));
console.log(isNumSmallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
console.log(isNumSmallEnough([101, 45, 75, 105, 99, 107], 107));
console.log(isNumSmallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));
