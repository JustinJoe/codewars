/* 
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
*/

// P: Takes in a string
// R: Returns a string with '!' in place of vowels
// E:
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"
// P:

function replace(str) {
  // search for vowels
  // replace with !
  return str.replace(/[aeiou]/gi, "!");
}

console.log(replace("Hi!"));
console.log(replace("!Hi! Hi!"));
console.log(replace("aeiou"));
console.log(replace("ABCDE"));
