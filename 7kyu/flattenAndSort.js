/* 
Given a two-dimensional array of integers, return the flattened version of the array with 
all the integers in the sorted (ascending) order.

*/
// P: Takes in a 2D array
// R: Returns a flattened and sorted array
// E:
// [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]] --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// P:
function flattenAndSort(array) {
  // declare new array
  // loop through 2D array
  // push into new array
  // sort

  let flatArray = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      flatArray.push(array[i][j]);
    }
  }
  return flatArray.sort((a, b) => a - b);
}

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
