/* 
There is an array with some numbers. All numbers are equal except for one. 
Try to find it!
*/

//P: Takes in an array of numbers
//R: Returns a number
//E:
// findUniqueNum([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniqueNum([ 0, 0, 0.55, 0, 0 ]) === 0.55
//P:
function getUniqueNum(arr) {
  return arr.find((num) => arr.indexOf(num) === arr.lastIndexOf(num));
}

console.log(findUniqueNum([1, 0, 0]));
console.log(findUniqueNum([1, 1, 1, 2, 1, 1]));
console.log(findUniqueNum([0, 0, 0.55, 0, 0]));
