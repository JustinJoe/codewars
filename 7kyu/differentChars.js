/* 
In this Kata, you will be given two strings a and b and your task will be to return the 
characters that are not common in the two strings.

For example:
differentChars("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those 
from the second string.
*/
// P: Takes in two strings
// R: Returns a string
// E:
// differentChars("xyab","xzca") --> "ybzc";
// differentChars("xyabb","xzca") --> "ybbzc";
// differentChars("abcd","xyz") --> "abcdxyz";
// differentChars("xxx","xzca") --> "zca";
// P:
function differentChars(string1, string2) {
  let first = [...string1].filter((char) => !string2.includes(char));
  let second = [...string2].filter((char) => !string1.includes(char));

  return first.concat(second).join("");
}

console.log(differentChars("xyab", "xzca"));
console.log(differentChars("xyabb", "xzca"));
console.log(differentChars("abcd", "xyz"));
console.log(differentChars("xxx", "xzca"));
