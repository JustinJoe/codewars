/* 
Write a function which removes from string all non-digit characters and parse the 
remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)
*/
// P: Takes in a string
// R: Returns an integer
// E:
// getNumberFromString("1") --> 1
// getNumberFromString("123") --> 123
// getNumberFromString("this is number: 7") --> 7
// P:
function getNumberFromString(string) {
  // split string
  // filter for number
  // match num for digits
  // join and convert to number

  return +string
    .split("")
    .filter((num) => num.match(/\d/))
    .join("");
}

console.log(getNumberFromString("1"));
console.log(getNumberFromString("123"));
console.log(getNumberFromString("this is number: 7"));
