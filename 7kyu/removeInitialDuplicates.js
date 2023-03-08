/* 
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence 
of each element.
*/
// P: Takes in an array
// R: Returns an array
// E:
// solve([3,4,4,3,6,3]) --> [4,6,3]
// solve([1,2,1,2,1,2,3]) --> [1,2,3]
// solve([1,2,3,4]) --> [1,2,3,4]
// solve([1,1,4,5,1,2,1]) --> [4,5,2,1]
// solve([1,2,1,2,1,1,3]) --> [2,1,3]
// P:
function solve(arr) {
  return [...new Set(arr.reverse())].reverse();
}

console.log(solve([3, 4, 4, 3, 6, 3]));
console.log(solve([1, 2, 1, 2, 1, 2, 3]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([1, 1, 4, 5, 1, 2, 1]));
console.log(solve([1, 2, 1, 2, 1, 1, 3]));
