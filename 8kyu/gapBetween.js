/* 
Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c 
is a char.

Please return the gap between the first position of c and the last position of c.

If there are a lot of c in the str, should return a positive integer; If there is only one 
c in str, should return 0; If there is no c in the str, should return -1. Retrieval should 
not ignored the case.
*/
// P: Takes in two strings, the second a single character
// R: Returns an integer
// E:
// gapBetween("ababc","a") should return 2(2-0)
// gapBetween("ababc","c") should return 0(4-4)
// gapBetween("ababc","d") should return -1
// P:
function gapBetween(str, char) {
  //if str.indexOf(char) - str.lastndexOf(char)

  return str.indexOf(char) != -1
    ? str.lastIndexOf(char) - str.indexOf(char)
    : -1;
}

console.log(gapBetween("ababc", "a"));
console.log(gapBetween("ababc", "c"));
console.log(gapBetween("ababc", "d"));
