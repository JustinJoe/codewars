/* 
Your task is to make a function that can take any non-negative integer as an 
argument and return it with its digits in descending order. Essentially, rearrange 
the digits to create the highest possible number.
*/
//P: Takes in a number
//R: Returns a number, with the digits in descending order
//E:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321
function descendingOrder(num) {
    return +num.toString().split('').sort((a, b) => b - a).join('');
}

console.log(descendingOrder(42145))
console.log(descendingOrder(145263))
console.log(descendingOrder(123456789))