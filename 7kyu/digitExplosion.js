/* 
Given a string made of digits [0-9], return a string where each digit is repeated a 
number of times equals to its value.

*/
// P: Takes in a string made upmof digits
// R: Returns a string of digits
// E:
// digitExplosion("312") --> "333122"
// digitExplosion("102269") --> "12222666666999999999"
// P:
function digitExplosion(num) {
  return num
    .split("")
    .map((digit) => digit.repeat(+digit))
    .join("");
}

console.log(digitExplosion("312"));
console.log(digitExplosion("12222666666999999999"));
