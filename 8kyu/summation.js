/* 
Summation
Write a program that finds the summation of every number from 1 to 
num. The number will always be a positive integer greater than 0.

*/

//P: Takes a number as the parameter
//R: Returns a number, a summation of 1 to the parameter
//E: 
// For example:
// summation(2) -> 3 (1 + 2)
// summation(8) -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
//P:

function summation(num) {
    //loops through from 1 to num
    //Adds them
    
    let count = 0;

    for (let i = 1; i <= num; i++) {
        count += i;
    }

    return count;

}

console.log(summation(2))
console.log(summation(8))