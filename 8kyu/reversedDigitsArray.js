/* 
Given a random non-negative number, you have to return the digits of 
this number within an array in reverse order.
*/

//P: Takes a number as the parameter
//R: Returns an array of digits with the original number reversed
//E: 
// 348597 --> [7,9,5,8,4,3]
//0 --> [0]
//P:

function digitise(num) {
    //Turn number into string
    //Split number
    //Reverse order
    //Make each element a number
    return num.toString().split('').reverse().map(num => +num);
}

console.log(digitise(348597))
console.log(digitise(0))