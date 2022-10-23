/* 
You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences 
except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause 
the resulting string to be empty, return an empty value (represented as a generic 
value NULL in the examples below).

Examples
*/
// P: Takes in a string
// R: Returns an array or null
// E:
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"
// ""     =>  null
// "1"    =>  null
// "1,2"  =>  null
// P:
function shiftAndPop(string) {
  arr = string.split(",");

  if (arr.length < 3) return null;
  else {
    arr.shift();
    arr.pop();
    return arr.join(" ");
  }
}

console.log(shiftAndPop("1,2,3"));
console.log(shiftAndPop("1,2,3,4"));
console.log(shiftAndPop("1,2,3,4,5"));
console.log(shiftAndPop(""));
console.log(shiftAndPop("1"));
console.log(shiftAndPop("1, 2"));
