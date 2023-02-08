/* 
Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would 
be empty
Your method should return true, if the strings are equal and false if they are not equal.
*/
// P: Takes in two strings
// R: Returns a boolean
// E:
// compareStrings("AD", "BC") --> true;
// compareStrings("AD", "DD") --> false;
// compareStrings("gf", "FG") --> true;
// compareStrings("Ad", "DD") --> false;
// compareStrings("zz1", "") --> true;
// compareStrings("ZzZz", "ffPFF") --> true;
// compareStrings("kl", "lz") --> false;
// compareStrings("!!", "7476") --> true;
// compareStrings("##", "1176") --> true;
// compareStrings(null, "BC") --> false;
// compareStrings(null, null) --> true;
// compareStrings(null, "") --> true;
// compareStrings("", "") --> true;
// P:
function compareStrings(str1, str2) {
  let str1Total = 0;
  let str2Total = 0;
  str1 = str1 === null ? null : str1.toUpperCase();
  str2 = str2 === null ? null : str2.toUpperCase();

  if (
    str1 === null ||
    str1.split("").some((cur) => cur.charCodeAt() < 65 || cur.charCodeAt() > 90)
  )
    str1Total = 0;
  else {
    str1Total = [...str1].reduce((acc, cur) => acc + cur.charCodeAt(), 0);
    console.log(str1Total);
  }

  if (
    str2 === null ||
    [...str2].some((cur) => cur.charCodeAt() < 65 || cur.charCodeAt() > 90)
  )
    str1Total = 0;
  else {
    str2Total = [...str2].reduce((acc, cur) => acc + cur.charCodeAt(), 0);
  }

  return str1Total === str2Total;
}

console.log(compareStrings("AD", "BC"));
console.log(compareStrings("AD", "DD"));
console.log(compareStrings("gf", "FG"));
console.log(compareStrings("Ad", "DD"));
console.log(compareStrings("zz1", ""));
console.log(compareStrings("ZzZz", "ffPFF"));
console.log(compareStrings("kl", "lz"));
console.log(compareStrings("!!", "7476"));
console.log(compareStrings("##", "1176"));
console.log(compareStrings(null, "BC"));
console.log(compareStrings(null, null));
console.log(compareStrings(null, ""));
console.log(compareStrings("", ""));
