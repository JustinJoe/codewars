/* 
Complete the function that takes two integers (a, b, where a < b) and return an 
array of all integers between the input parameters, including them.
*/

//P: Takes in two integers, a and b
//R: Returns an array of integers from a to b
//E:
// getNumBetween(1, 4) --> [1, 2, 3, 4];
// getNumBetween(-2, 2) --> [-2, -1, 0, 1, 2];
// getNumBetween(7, 11) --> [7, 8, 9, 10, 11];
//P:

function getNumBetween(a, b) {
  //Create an array
  //Loop from a to b
  //Push into array
  let array = [];

  for (a; a <= b; a++) {
    array.push(a);
  }

  return array;
}

console.log(getNumBetween(1, 4));
console.log(getNumBetween(-2, 2));
console.log(getNumBetween(7, 11));
