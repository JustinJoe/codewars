/* 
Complete the solution so that the function will break up camel casing, using a space between words.

*/

// P: Takes in a string, word
// R: Returns a string
// E:
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// P:

function breakCamelCase(word) {
  // split word
  // check for capital
  // instroduce a space where capital is present
  // return char as is if not an uppercase

  return word
    .split("")
    .map((char) => {
      if (char === char.toUpperCase()) {
        char = " " + char;
      }
      return char;
    })
    .join("");
}

console.log(breakCamelCase("camelCasing"));
console.log(breakCamelCase("identifier"));
console.log(breakCamelCase(""));
