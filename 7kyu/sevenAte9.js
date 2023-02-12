/* 
Write a function that removes every lone 9 that is inbetween 7s.
*/
// P: Takes in an a string made up of digits
// R: Returns a string
// E:
// '797' --> '77';
// '7979797' --> '7777';
// '165561786121789797' --> '16556178612178977';
// P:
function sevenAte9(str) {
  return str
    .split("")
    .map((char, i) => {
      if (char === "9" && str[i - 1] == 7 && str[i + 1] == 7) return "";
      else return char;
    })
    .join("");
}

console.log(sevenAte9("797"));
console.log(sevenAte9("7979797"));
console.log(sevenAte9("165561786121789797"));
