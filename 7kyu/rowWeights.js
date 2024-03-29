/* 
Several people are standing in a row divided into two teams. The first person goes into 
team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple 
of two integers, where the first one is the total weight of team 1, and the second one is 
the total weight of team 2.

Notes
Array size is at least 1. All numbers will be positive.
*/

// P: Takes in an array of integers
// R: Returns an array of two integers
// E:
// rowWeights([80]) --> [80,0]
// rowWeights([100,50]) --> [100,50]
// rowWeights([50,60,70,80]) --> [120,140]
// rowWeights([13,27,49]) --> [62,27]
// rowWeights([70,58,75,34,91]) --> [236,92]
// rowWeights([29,83,67,53,19,28,96]) --> [211,164]
// rowWeights([0]) --> [0,0]
// rowWeights([100,51,50,100]) --> [150,151]
// rowWeights([39,84,74,18,59,72,35,61]) --> [207,235]
// rowWeights([0,1,0]) --> [0,1]
// P:

function rowWeights(array) {
  // let arr = []
  // filter array and reduce for odd indices
  // filter array and reduce for even indices
  // return arr

  let arr = [];

  arr.push(
    array.filter((num, i) => !(i % 2)).reduce((acc, cur) => acc + cur, 0)
  );
  arr.push(array.filter((num, i) => i % 2).reduce((acc, cur) => acc + cur, 0));

  return arr;
}

console.log(rowWeights([80]));
console.log(rowWeights([100, 50]));
console.log(rowWeights([50, 60, 70, 80]));
console.log(rowWeights([13, 27, 49]));
console.log(rowWeights([70, 58, 75, 34, 91]));
console.log(rowWeights([29, 83, 67, 53, 19, 28, 96]));
console.log(rowWeights([0]));
console.log(rowWeights([100, 51, 50, 100]));
console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]));
console.log(rowWeights([0, 1, 0]));
