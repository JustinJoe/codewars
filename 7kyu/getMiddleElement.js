/* 
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index 
of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example: 
getMiddleElement([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

getMiddleElement([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

//P: Takes in an array of nubers
//R: Returns a number
//E:
// getMiddleElement([2, 3, 1]) => 0
// getMiddleElement([5, 10, 14]) => 1
//P:

function getMiddleElement(arr) {
  //make distinct copy of array
  //sort array
  //get middle element's index in unsorted array

  let sortedArr = arr.slice(0).sort((a, b) => a - b);
  return arr.indexOf(sortedArr[1]);
}

console.log(getMiddleElement([2, 3, 1]));
console.log(getMiddleElement([5, 10, 14]));
