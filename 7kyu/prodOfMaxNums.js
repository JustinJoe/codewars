/* 
Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.
*/
// P: Takes in an array and an integer
// R: Returns an integer
// E:
// prodOfMaxNums([4,3,5], 2) --> 20
// prodOfMaxNums([10,8,7,9], 3) --> 720
// prodOfMaxNums([8,6,4,6], 3) --> 288
// prodOfMaxNums([10,2,3,8,1,10,4], 5) --> 9600
// prodOfMaxNums([13,12,-27,-302,25,37,133,155,-14], 5) --> 247895375
// prodOfMaxNums([-4,-27,-15,-6,-1], 2) --> 4
// prodOfMaxNums([-17,-8,-102,-309], 2) --> 136
// prodOfMaxNums([10,3,-27,-1], 3) --> -30
// prodOfMaxNums([14,29,-28,39,-16,-48], 4) --> -253344
// prodOfMaxNums([1], 1) --> 1
// P:
function prodOfMaxNums(numArr, size) {
  return numArr
    .sort((a, b) => a - b)
    .filter((num, i) => i > numArr.length - 1 - size)
    .reduce((acc, cur) => acc * cur, 1);
}

console.log(prodOfMaxNums([4, 3, 5], 2));
console.log(prodOfMaxNums([10, 8, 7, 9], 3));
console.log(prodOfMaxNums([8, 6, 4, 6], 3));
console.log(prodOfMaxNums([10, 2, 3, 8, 1, 10, 4], 5));
console.log(prodOfMaxNums([13, 12, -27, -302, 25, 37, 133, 155, -14], 5));
console.log(prodOfMaxNums([-4, -27, -15, -6, -1], 2));
console.log(prodOfMaxNums([-17, -8, -102, -309], 2));
console.log(prodOfMaxNums([10, 3, -27, -1], 3));
console.log(prodOfMaxNums([14, 29, -28, 39, -16, -48], 4));
console.log(prodOfMaxNums([1], 1));
