/* 
In this Kata, you will be given a string and your task will be to return a list of ints 
detailing the count of uppercase letters, lowercase, numbers and special characters, as 
follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
*/
// P: Takes in a string
// R: Returns an array
// E:
// countChar("") --> [0,0,0,0];
// countChar("aAbBcC") --> [3,3,0,0];
// countChar("Codewars@codewars123.com") --> [1,18,3,2];
// countChar("bgA5<1d-tOwUZTS8yQ") --> [7,6,3,2];
// countChar("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H") --> [9,9,6,9];
// countChar("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD") --> [15,8,6,9];
// countChar("$Cnl)Sr<7bBW-&qLHI!mY41ODe") -->  [10,7,3,6];
// countChar("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft") -->  [7,13,4,10];
// P:
function countChar(string) {
  let upper = 0;
  let lower = 0;
  let num = 0;
  let special = 0;

  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      upper++;
    } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      lower++;
    } else if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
      num++;
    } else special++;
  }

  return [upper, lower, num, special];
}

console.log(countChar(""));
console.log(countChar("aAbBcC"));
console.log(countChar("Codewars@codewars123.com"));
console.log(countChar("bgA5<1d-tOwUZTS8yQ"));
console.log(countChar("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"));
console.log(countChar("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"));
console.log(countChar("$Cnl)Sr<7bBW-&qLHI!mY41ODe"));
console.log(countChar("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"));
