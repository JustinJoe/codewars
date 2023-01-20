/* 
Complete the function that returns an array of length n, starting with the given number x 
and the squares of the previous number. If n is negative or zero, return an empty 
array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
*/
// P: Takes in two integers
// R: Returns an array
// E:
// squareSequence(2,5) --> [2,4,16,256,65536];
// squareSequence(3,3) --> [3,9,81];
// squareSequence(5,3) --> [5,25,625];
// squareSequence(10,4) --> [10,100,10000,100000000];
// squareSequence(2,0) -->  [];
// squareSequence(2,-5) -->  [];
// P:
function squareSequence(num1, num2) {
  let array = [];

  for (let i = 0; i < num2; i++) {
    if (i === 0) array.push(num1);
    else array.push(Math.pow(array[i - 1], 2));
  }

  return array;
}

console.log(squareSequence(2, 5));
console.log(squareSequence(3, 3));
console.log(squareSequence(5, 3));
console.log(squareSequence(10, 4));
console.log(squareSequence(2, 0));
console.log(squareSequence(2, -5));
