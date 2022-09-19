/* 
Your boss decided to save money by purchasing some cut-rate optical character recognition 
software for scanning in the text of old novels to your database. At first it seems to 
capture words okay, but you quickly notice that it throws in a lot of numbers at random 
places in the text.

Your harried co-workers are looking to you for a solution to take this garbled text and 
characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all 
intact.
*/
// P: Takes in a string
// R: Returns a string
// E:
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// P:
function stringCleaner(str) {
  // replace any number with an empty string

  return str.replace(/\d+/g, "");
}

console.log(stringCleaner("! !"));
console.log(stringCleaner("123456789"));
console.log(stringCleaner("This looks5 grea8t!"));
