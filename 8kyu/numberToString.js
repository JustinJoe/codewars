/* 
We need a function that can transform a number (integer) into a string.
What ways of achieving this do you know?
*/

//P: Takes in an integer
//R: Returns a string
//E:
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"
//P:

function numberToString(num) {
    //Convert number to string
    return num.toString();
}

console.log(typeof numberToString(123))
console.log(typeof numberToString(999))
console.log(typeof numberToString(-100))