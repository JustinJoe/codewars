/* 
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

// P: Takes in an array
// R: Returns a string
// E:
// isSortedAndHow([1, 2]) --> 'yes, ascending'
// isSortedAndHow([15, 7, 3, -8]) --> 'yes, descending'
// isSortedAndHow([4, 2, 30]) --> 'no'
// P:
function isSortedAndHow(array) {
  //
  let ascending = [];
  let descending = [];
  for (let i = 0; i < array.length - 1; i++) {
    ascending.push(array[i] <= array[i + 1]);
    descending.push(array[i] >= array[i + 1]);
  }
  return ascending.every((boo) => boo === true)
    ? "yes, ascending"
    : descending.every((boo) => boo === true)
    ? "yes, descending"
    : "no";
}

console.log(isSortedAndHow([1, 2]));
console.log(isSortedAndHow([1, 1, 2]));
console.log(isSortedAndHow([15, 7, 3, -8]));
console.log(isSortedAndHow([4, 2, 30]));
