/* 
Given a string, write a function that returns the string with a question mark ("?") 
appends to the end, unless the original string ends with a question mark, in which case, 
returns the original string.
*/
// P: Takes in a string
// R: Returns a string
// E:
// ensureQuestion("") --> "?";
// ensureQuestion("Yes") --> "Yes?";
// ensureQuestion("No?") --> "No?";
// P:
function ensureQuestion(s) {
  return s.endsWith("?") ? s : s.concat("?");
}

console.log(ensureQuestion(""));
console.log(ensureQuestion("Yes"));
console.log(ensureQuestion("No?"));
