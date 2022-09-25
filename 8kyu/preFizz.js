/* 
This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have 
NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output.
*/
// P: Takes in an integer
// R: Returns an array
// E:
// preFizz(1) --> [1]
// preFizz(2) --> [1,2]
// preFizz(3) --> [1,2,3]
// preFizz(4) --> [1,2,3,4]
// preFizz(5) --> [1,2,3,4,5]
// P:
function preFizz(n) {
  // let array = []
  // loop from 1 to n
  // push i into array

  let array = [];

  for (let i = 1; i <= n; i++) {
    array.push(i);
  }

  return array;
}

console.log(preFizz(1));
console.log(preFizz(2));
console.log(preFizz(3));
console.log(preFizz(4));
console.log(preFizz(5));
