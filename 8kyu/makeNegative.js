/* 
In this simple assignment you are given a number and have to make it 
negative. But maybe the number is already negative?

*/

//P: Takes in a number as the parameter
//R: Returns zero if number is zero, else returns a negative number
//E:
// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
//P:
function makeNegative(num) {
    //Check if num is more than zero
    //negate number if above is true
    //else return the num as it is
    
    //Initial solution
    // return num > 0 ? -num : num
    
    //Refactored
    return -Math.abs(num)
}

console.log(makeNegative(1))
console.log(makeNegative(-5))
console.log(makeNegative(0))
console.log(makeNegative(0.12))