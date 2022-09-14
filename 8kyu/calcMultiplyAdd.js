/* 
Make a function that returns the value multiplied by 50 and increased by 6. If the value 
entered is a string it should return "Error".
*/

// P: Takes in an integer value
// R: Returns either a string (if value is a string) or an integer if value is an integer
// E:
// calcMultiplyAdd("hello") --> "Error";
// calcMultiplyAdd(1) --> 56
// calcMultiplyAdd(5) --> 256
// calcMultiplyAdd(0) --> 6
// P:

function calcMultiplyAdd(value) {
  // if typeof value === "string", return "Error"
  // else value * 50 + 6

  return typeof value === "string" ? "Error" : value * 50 + 6;
}

console.log(calcMultiplyAdd("hello"));
console.log(calcMultiplyAdd(1));
console.log(calcMultiplyAdd(5));
console.log(calcMultiplyAdd(0));
