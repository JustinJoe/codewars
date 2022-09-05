/* 
Write a function that takes a single string (word) as argument. The function must return an ordered 
list containing the indexes of all capital letters in the string.
*/

// P: Takws in a string
// R: Returns an array
// E:
// indexOfCapitals('CodEWaRs') --> [0,3,4,6]
// P:

function indexOfCapitals(text) {
  // Split string
  // loop through for capitals
  // return index

  return text
    .split("")
    .map((char, i) => {
      if (char === char.toUpperCase()) {
        return i;
      }
    })
    .filter((num) => typeof num === "number");
}

console.log(indexOfCapitals("CodEWaRs"));
