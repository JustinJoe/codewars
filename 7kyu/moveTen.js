/* 
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/

// P: Takes in a string
// R: Returns a string
// E:
// moveTen("testcase") --> "docdmkco";
// moveTen("codewars") --> "mynogkbc";
// moveTen("exampletesthere") --> "ohkwzvodocdrobo";
// P:
function moveTen(string) {
  // loop through string
  // get letter charCode
  // if <= 112 add 10
  // else return a

  return [...string]
    .map((char, i) => {
      let number = string.charCodeAt(i);
      if (number <= 112) {
        return String.fromCharCode(number + 10);
      }
      return String.fromCharCode(number - 16);
    })
    .join("");
}

console.log(moveTen("testcase"));
console.log(moveTen("codewars"));
console.log(moveTen("exampletesthere"));
