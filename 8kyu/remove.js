/* 
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of 
string. For a beginner kata, you can assume that the input data is always a non empty 
string, no need to verify it.
*/
// P: Takes in a string
// R: Returns a string with no exclamation marks except at the end
// E:
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"
// P:

function remove(str) {
  return str.replaceAll("!", "").concat("!");
}

console.log(remove("Hi!"));
console.log(remove("Hi!!!"));
console.log(remove("!Hi"));
console.log(remove("!Hi!"));
console.log(remove("Hi! Hi!"));
console.log(remove("Hi"));
