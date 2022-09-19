/* 
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
You will be passed a string and you must return that string in an array where an uppercase 
letter is a person standing up. 

Rules
 1.  The input string will always be lower case but maybe empty.
 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
*/
// P: Takes in a string
// R: Returns an array with the length of the string
// E:
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// wave("codewars") --> ["Codewars", "cOdewars", "coDewars", "codEwars",
// "codeWars", "codewArs", "codewaRs", "codewarS"];
// wave("") --> {""}
// wave("two words") --> ["Two words", "tWo words", "twO words", "two Words",
// "two wOrds", "two woRds", "two worDs", "two wordS"]
// wave(" gap ") --> [" Gap ", " gAp ", " gaP "];
// P:
function wave(str) {
  // let arr = []
  // loop through the length of str
  // split str into another variable
  // fi copy[i] !== " ", change letter to uppercase
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let copy = str.split("");
    if (copy[i] !== " ") {
      copy[i] = copy[i].toUpperCase();
      arr.push(copy.join(""));
    }
  }

  return arr;
}

console.log(wave("hello"));
console.log(wave("codewars"));
console.log(wave(""));
console.log(wave("two words"));
console.log(wave("  gap  "));
