/* 
Write function alternateCase which switch every letter in string from upper to lower and 
from lower to upper. E.g: Hello World -> hELLO wORLD
*/
// P: Takes in a string
// R: Returns a string
// E:
// alternateCase("abc") --> "ABC";
// alternateCase("ABC") --> "abc";
// alternateCase("Hello World") --> "hELLO wORLD";
// P:
function alternateCase(string) {
  let arr = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
      arr.push(string[i].toLowerCase());
    } else if (string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122) {
      arr.push(string[i].toUpperCase());
    } else arr.push(string[i]);
  }

  return arr.join("");
}
// console.log(String.charCodeAt())
console.log(alternateCase("abc"));
console.log(alternateCase("ABC"));
console.log(alternateCase("Hello World"));
// A - 65
// Z - 90
// a - 97
// z - 122
