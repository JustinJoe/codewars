/* 
Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero).
*/

//P: Takes in arr, an array of integers
//R: Returns a string, even or odd
//E: 
// [0] --> "even"
// [0, 1, 4] --> "odd"
// [0, -1, -5] --> "even"
//P: 

function oddOrEven(arr) {
    //Sum integers
    //Check if sum is an even or odd number
    return arr.reduce((acc, curr) => acc + curr, 0) % 2 ? 'odd' : 'even';
}

console.log(oddOrEven([0]))
console.log(oddOrEven([0, 1, 4]))
console.log(oddOrEven([0, -1, -5]))