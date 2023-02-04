/* 
A trick I learned in elementary school to determine whether or not a number was divisible 
by three is to add all of the integers in the number together and to divide the resulting 
sum by three. If there is no remainder from dividing the sum by three, then the original 
number is divisible by three as well.

Given a series of digits as a string, determine if the number represented by the string 
is divisible by three.

Example:

Try to avoid using the % (modulo) operator.
*/
// P: Takes in a string
// R: Returns a boolean
// E:
// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false
// P:
function divisibleByThree(str) {
  return str.split("").reduce((acc, cur) => +acc + +cur, 0) % 3 === 0;
}

console.log(divisibleByThree("123"));
console.log(divisibleByThree("8409"));
console.log(divisibleByThree("100853"));
console.log(divisibleByThree("33333333"));
console.log(divisibleByThree("7"));
