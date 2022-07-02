/* 
Implement a function that adds two numbers together and returns their 
sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
Examples:(Input1, Input2 --> Output (explanation)))

*/

//P: Takes in two numbers as the parameters
//R: Returns the sum of the two numbers in binary
//E:
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
//P:

function calcBinaySum(num1, num2){
    //Add the two numbers in decimal
    //Convert the result to binary
    const sum = num1 + num2;
    return sum.toString(2)
}

console.log(calcBinaySum(1, 1))
console.log(calcBinaySum(5, 9))