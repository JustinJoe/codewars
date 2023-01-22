/* 
Remove all exclamation marks from the end of sentence.

*/
// P: Takes in a string
// R: Returns a string
// E:
// removeEndExclamation("Hi!") === "Hi"
// removeEndExclamation("Hi!!!") === "Hi"
// removeEndExclamation("!Hi") === "!Hi"
// removeEndExclamation("!Hi!") === "!Hi"
// removeEndExclamation("Hi! Hi!") === "Hi! Hi"
// removeEndExclamation("Hi") === "Hi"
// P:
function removeEndExclamation(string) {
  return string.endsWith("!")
    ? removeEndExclamation(string.slice(0, -1))
    : string;
}

console.log(removeEndExclamation("Hi!"));
console.log(removeEndExclamation("Hi!!!"));
console.log(removeEndExclamation("!Hi"));
console.log(removeEndExclamation("!Hi!"));
console.log(removeEndExclamation("Hi! Hi!"));
console.log(removeEndExclamation("Hi"));
