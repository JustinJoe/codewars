/* 
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume 
that the input data is always a string, no need to verify it.

*/
// P: Takes in a string
// R: Returns a string
// E:
removeExclamation("Hi!") == "Hi";
removeExclamation("Hi!!!") == "Hi!!";
removeExclamation("!Hi") == "!Hi";
removeExclamation("!Hi!") == "!Hi";
removeExclamation("Hi! Hi!") == "Hi! Hi";
removeExclamation("Hi") == "Hi";
// P:
function removeExclamation(string) {
  // if string[str.length - 1] === "!"
  // slice and exclude it

  if (string[string.length - 1] === "!") {
    string = string.slice(0, string.length - 1);
  }
  return string;
}

console.log(removeExclamation("Hi!"));
console.log(removeExclamation("Hi!!!"));
console.log(removeExclamation("!Hi"));
console.log(removeExclamation("!Hi!"));
console.log(removeExclamation("Hi! Hi!"));
console.log(removeExclamation("Hi"));
