/* 
Given an array of numbers (in string format), you must return a string. The numbers 
correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should 
also account for '!', '?' and ' ' that are represented by '27', '28' and '29' 
respectively.

All inputs will be valid.
*/
// P: Takes in an array
// R: Returns a string
// E:
// numsToLetters(['24', '12', '23', '22', '4', '26', '9', '8']) --> 'codewars';
// numsToLetters(['25','7','8','4','14','23','8','25','23','29','16','16','4']) --> 'btswmdsbd kkw';
// numsToLetters(['4', '24']) --> 'wc';
// P:
const array = {
  29: " ",
  28: "?",
  27: "!",
  26: "a",
  25: "b",
  24: "c",
  23: "d",
  22: "e",
  21: "f",
  20: "g",
  19: "h",
  18: "i",
  17: "j",
  16: "k",
  15: "l",
  14: "m",
  13: "n",
  12: "o",
  11: "p",
  10: "q",
  9: "r",
  8: "s",
  7: "t",
  6: "u",
  5: "v",
  4: "w",
  3: "x",
  2: "y",
  1: "z",
};

function numsToLetters(numsArray) {
  return numsArray.map((char) => array[char]).join("");
}

console.log(numsToLetters(["24", "12", "23", "22", "4", "26", "9", "8"]));
console.log(
  numsToLetters([
    "25",
    "7",
    "8",
    "4",
    "14",
    "23",
    "8",
    "25",
    "23",
    "29",
    "16",
    "16",
    "4",
  ])
);
console.log(numsToLetters(["4", "24"]));
