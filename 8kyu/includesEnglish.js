/* 
Given a string of arbitrary length with any ascii characters. Write a function to determine 
whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but 
"abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does 
not.
*/
// P: Takes in a string
// R: Returns a boolean
// E:
// includesEnglish("abcEnglishdef") --> true
// includesEnglish("eNglisH") --> true
// includesEnglish("egnlish") --> false
// P:
function includesEnglish(string) {
  // toLowerCase()
  // includes english

  return string.toLowerCase().includes("english");
}

console.log(includesEnglish("abcEnglishdef"));
console.log(includesEnglish("eNglisH"));
console.log(includesEnglish("egnlish"));
