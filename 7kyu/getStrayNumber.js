/* 
You are given an odd-length array of integers, in which all of them are the same, except for one 
single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
*/

// P: Takes in an array of integers
// R: Returns an integer
// E:
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
// P:

function getStrayNumber(arr) {
  //loop through and check if element is same as previous
  arr = arr.sort();

  if (arr[0] !== arr[1]) {
    return arr[0];
  }
  return arr[arr.length - 1];
}

console.log(getStrayNumber([1, 1, 2]));
console.log(getStrayNumber([2, 1, 1]));
console.log(getStrayNumber([17, 17, 3, 17, 17, 17, 17]));
