/* 
Find the sum of the odd numbers within an array, after cubing the initial integers. 
The function should return undefined if any of the values aren't numbers.
*/

// P: Takes in an array of integers
// R: Returns an integer
// E:
// cubeOdd([1, 2, 3, 4]) --> 28
// cubeOdd([-3,-2,2,3]) --> 0
// cubeOdd(["a",12,9,"z",42]) --> undefined
// P:
function odd(num) {
  return num < 0 ? odd(num + 2) : num % 2 === 1;
}

function cubeOdd(arr) {
  let answer = arr
    .filter((num) => odd(num))
    .map((num) => Math.pow(num, 3))
    .reduce((acc, cur) => acc + cur, 0);

  return arr.every((num) => typeof num === "number") ? answer : undefined;
}

console.log(cubeOdd([1, 2, 3, 4]));
console.log(cubeOdd([-3, -2, 2, 3]));
console.log(cubeOdd(["a", 12, 9, "z", 42]));
