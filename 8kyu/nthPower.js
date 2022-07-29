/* 
You are given an array with positive numbers and a non-negative number N. You should find the N-th 
power of the element in the array with the index N. If N is outside of the array, then return -1. 
Don't forget that the first element has the index 0.
*/

//P: Takes in two parameters - an array and an integer
//R: Returns an integer
//E:
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
//P:

function nthPower(array, n) {
    //Check if array length is equal to or greater than n
    //Find the power of the array's index n raised to the power n

    return n >= array.length ? -1 : array[n] ** n;
}

console.log(nthPower([1, 2, 3, 4], 2))
console.log(nthPower([1, 2, 3], 3))