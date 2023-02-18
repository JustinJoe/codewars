/* 
Definition
Disarium number is the number that The sum of its digits powered with their respective 
positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .
*/
// P: Takes in an integer
// R: Returns a string
// E:
// disariumNumber(89) --> "Disarium !!";
// disariumNumber(564) --> "Not !!";
// disariumNumber(1024) --> "Not !!";
// disariumNumber(135) --> "Disarium !!";
// disariumNumber(136586) --> "Not !!";
// P:
function disariumNumber(n) {
  return n ===
    String(n)
      .split("")
      .reduce((acc, cur, i) => +acc + Math.pow(+cur, i + 1))
    ? "Disarium !!"
    : "Not !!";
}

console.log(disariumNumber(89));
console.log(disariumNumber(564));
console.log(disariumNumber(1024));
console.log(disariumNumber(135));
console.log(disariumNumber(136586));
