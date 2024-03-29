/* 
Given an array of numbers, check if any of the numbers are the character codes for lower 
case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/
// P: Takes in an array
// R: Returns an array
// E:
// isVowel([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]) -->
// [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
// isVowel([101,121,110,113,113,103,121,121,101,107,103]) -->
// ["e",121,110,113,113,103,121,121,"e",107,103]
// P:
function isVowel(array) {
  // check if integer is a vowel

  return array.map((num) => {
    return num === 97
      ? "a"
      : num === 101
      ? "e"
      : num === 105
      ? "i"
      : num === 111
      ? "o"
      : num === 117
      ? "u"
      : num;
  });
}

console.log(
  isVowel([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
);
console.log(isVowel([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]));
