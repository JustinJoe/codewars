/* 
To complete this Kata you need to make a function multiplyAll/multiply_all which takes 
an array of integers as an argument. This function must return another function, which 
takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied 
by the integer.

You must not mutate the original array.
*/
// P: Takes in an array and an integer
// R: Returns an array
// E:
// Array.isArray(multiplyAll([1])(1)) --> true;
// multiplyAll([1, 2])(1).length === 2 --> true
// multiplyAll([1, 2, 3])(1) --> [1, 2, 3];
// multiplyAll([1, 2, 3])(2) --> [2, 4, 6];
// multiplyAll([1, 2, 3])(0) --> [0, 0, 0];
// multiplyAll([])(10) --> [];
// P:
function multiplyAll(arr) {
  return function (int) {
    return arr.map((num) => num * int);
  };
}

console.log(Array.isArray(multiplyAll([1])(1)));
console.log(multiplyAll([1, 2])(1).length === 2);
console.log(multiplyAll([1, 2, 3])(1));
console.log(multiplyAll([1, 2, 3])(2));
console.log(multiplyAll([1, 2, 3])(0));
console.log(multiplyAll([])(10));
