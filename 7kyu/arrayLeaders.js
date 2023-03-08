/* 
An element is leader if it is greater than the sum all the elements to its right side.

Given an array/list [] of integers , Find all the LEADERS in the array.
Notes
Array/list size is at least 3.
Array/list's numbers will be mixture of positives , negatives and zeros
Repetition of numbers in the array/list could occur.
Returned array/list should store the leading numbers in the same order in the original 
array/list .
*/
// P: Takes in an array of integers
// R: Returns an array
// E:
// arrayLeaders([1,2,3,4,0]) --> [4]
// arrayLeaders([16,17,4,3,5,2]) --> [17,5,2]
// arrayLeaders([-1,-29,-26,-2]) --> [-1]
// arrayLeaders([-36,-12,-27]) -->  [-36,-12]
// arrayLeaders([5,-2,2]) --> [5,2]
// arrayLeaders([0,-1,-29,3,2]) -->  [0,-1,3,2]
// P:
function arrayLeaders(numbers) {
  let leaders = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] > numbers.slice(i + 1).reduce((acc, cur) => acc + cur, 0))
      leaders.unshift(numbers[i]);
  }

  return leaders;
}

console.log(arrayLeaders([1, 2, 3, 4, 0]));
console.log(arrayLeaders([16, 17, 4, 3, 5, 2]));
console.log(arrayLeaders([-1, -29, -26, -2]));
console.log(arrayLeaders([-36, -12, -27]));
console.log(arrayLeaders([5, -2, 2]));
console.log(arrayLeaders([0, -1, -29, 3, 2]));
