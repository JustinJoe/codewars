/* 
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in 
a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/
// P: Takes in a string
// R: Returns a string with no lowercase vowels
// E:
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// "hello" --> "hll"
// "how are you today?" --> "hw r y tdy?"
// "complain" --> "cmpln"
// "never" --> "nvr"
// P:
function removeVovels(string) {
  return [...string].filter((char) => !char.match(/[aeiou]/g)).join("");
}

console.log(removeVovels("codewars"));
console.log(removeVovels("goodbye"));
console.log(removeVovels("HELLO"));
console.log(removeVovels("hello"));
console.log(removeVovels("how are you today?"));
console.log(removeVovels("complain"));
console.log(removeVovels("never"));
