/* 
Given an array of ones and zeroes, convert the equivalent binary value to an integer.
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
However, the arrays can have varying lengths, not just limited to 4.
*/

//P: Takes in an array of zeroes and ones
//R: Returns a number
//E:
// [0, 0, 0, 1] ==> 1
// [0, 0, 1, 0] ==> 2
// [0, 1, 0, 1] ==> 5
// [1, 0, 0, 1] ==> 9
// [0, 1, 1, 0] ==> 6
// [1, 1, 1, 1] ==> 15
// [1, 0, 1, 1] ==> 11
//P:
function binaryArrayToNumber(array) {
  //join elements in array
  //convert to dec with parseInt
  return parseInt(array.join(""), 2);
}

console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log(binaryArrayToNumber([0, 0, 1, 0]));
console.log(binaryArrayToNumber([0, 1, 0, 1]));
console.log(binaryArrayToNumber([1, 0, 0, 1]));
console.log(binaryArrayToNumber([0, 1, 1, 0]));
console.log(binaryArrayToNumber([1, 1, 1, 1]));
console.log(binaryArrayToNumber([1, 0, 1, 1]));
