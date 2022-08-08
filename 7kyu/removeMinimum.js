/* 
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the 
interior architect, comes up with a plan to remove the most boring exhibitions. She gives 
them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so 
she asks you to write a program that tells her the ratings of the items after one removed 
the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original 
array/list. If there are multiple elements with the same value, remove the one with a 
lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

*/

//P: Takes in an array
//R: Returns an array
//E: 
// Input: [1,2,3,4,5] --> [2,3,4,5]
// Input: [5,3,2,1,4] --> [5,3,2,4]
// Input: [2,2,1,2,1] --> [2,2,2,1]
//P:

function removeMinimum(arr) {
    //spread array
    //Check for minimum
    //Remove minimum from array
    let newArr = [...arr];
    let minimum = Math.min(...newArr);
    let index = newArr.indexOf(minimum);

    newArr.splice(index, 1);
    
    return newArr;
}

console.log(removeMinimum([1,2,3,4,5]))
console.log(removeMinimum([5,3,2,1,4]))
console.log(removeMinimum([2,2,1,2,1]))