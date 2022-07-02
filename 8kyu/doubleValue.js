/* 
Given an array of integers, return a new array with each value doubled.

*/

//P: Takes an array of numbers as the parameter
//R: Returns a new array with values/elements doubled
//E: [1, 2, 3] --> [2, 4, 6]
//P:

function doubledArray(arr) {
    //loop through array
    //double each value
    //place in new array
        
    return arr.map(num => num * 2);
}

console.log(doubledArray([1, 2, 3]))