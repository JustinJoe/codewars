/* 
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an 
empty array or null/nil value then it should return an empty array.

For example:

*/
// P: Takes in an array of integers
// R: Returns an sorted array of integers - from minimum to maximum
// E:
// sortArray([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// sortArray(null); // should return []
// P:

function sortArray(numbers) {
  // if numbers == null return []
  // sort array from min to max

  if (numbers == null) return [];
  else return numbers.sort((a, b) => a - b);
}

console.log(sortArray([1, 2, 10, 50, 5]));
console.log(sortArray(null));
