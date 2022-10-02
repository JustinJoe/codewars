/* 
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one 
in the array.
*/
// P: Takes in an array
// R: Returns an integer
// E:
// findLongest([1, 10, 100]) --> 100
// findLongest([9000, 8, 800]) --> 9000
// findLongest([8, 900, 500]) --> 900
// P:
function findLongest(array) {
  // loop through
  // Numbers as strings
  // compare lengths

  let longest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (String(array[i]).length > String(longest).length) {
      longest = array[i];
    }
  }

  return longest;
}

console.log(findLongest([1, 10, 100]));
console.log(findLongest([9000, 8, 800]));
console.log(findLongest([8, 900, 500]));
