/* 
Welcome. In this kata, you are asked to square every digit of a number 
and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, 
because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

//P: Takes an integer as its parameter
//R: Returns a number - each digit sqaured and concatenated
//E: (3212) --> 9414; (2112) --> 4114; (0) -->
//P:

function sqareDigits(num){
    //Split digit
    //Squre each element in array
    //Concatenate and return result
    return Number(num.toString().split('').map(num => num**2).join(''));
}

console.log(sqareDigits(3212))
console.log(sqareDigits(2112))
console.log(sqareDigits(0))
console.log(sqareDigits(9119))