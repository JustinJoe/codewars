/* 
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, 
and return as shown below. Index 0 will be considered even.

The input will be a lowercase string with no spaces.
*/
// P: Takes in a string
// R: Returns an array with two strings
// E:
// capitalise("abcdef") --> ['AbCdEf', 'aBcDeF']
// capitalise("codewars") --> ['CoDeWaRs', 'cOdEwArS']
// capitalise("abracadabra") --> ['AbRaCaDaBrA', 'aBrAcAdAbRa']
// capitalise("codewarriors") --> ['CoDeWaRrIoRs', 'cOdEwArRiOrS']
// P:
function capitalise(str) {
  // Split string
  // loop throguh
  // convert letters based on indices
  // Join

  str = str.split("");

  const first = str
    .map((char, i) => (i % 2 === 0 ? char.toUpperCase() : char))
    .join("");
  const second = str
    .map((char, i) => (i % 2 ? char.toUpperCase() : char))
    .join("");

  return [first, second];
}

console.log(capitalise("abcdef"));
console.log(capitalise("codewars"));
console.log(capitalise("abracadabra"));
console.log(capitalise("codewarriors"));
