/* 
A balanced number is a number where the sum of digits to the left of the middle digit(s) 
and the sum of digits to the right of the middle digit(s) are equal.

If the number has an odd number of digits, then there is only one middle digit. 
(For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. 
(For example, the middle digits of 1301 are 3 and 0.)

The middle digit(s) should not be considered when determining whether a number is 
balanced or not, e.g. 413023 is a balanced number because the left sum and right 
sum are both 5.

The task
Given a number, find if it is balanced, and return the string "Balanced" or 
"Not Balanced" accordingly. The passed number will always be positive.
*/
// P: Takes in an integer
// R: Returns a string
// E:
// balancedNum(7) --> "Balanced";
// balancedNum(959) --> "Balanced";
// balancedNum(13) --> "Balanced";
// balancedNum(432) --> "Not Balanced";
// balancedNum(424) --> "Balanced";
// balancedNum(1024) --> "Not Balanced";
// balancedNum(66545) --> "Not Balanced";
// balancedNum(295591) --> "Not Balanced";
// balancedNum(1230987) --> "Not Balanced";
// balancedNum(56239814) --> "Balanced";
// P:
function balancedNum(number) {
  let left;
  let right;
  let len = String(number).length;

  if (len % 2 === 1) {
    left = String(number).slice(0, Math.floor(len / 2));
    right = String(number).slice(Math.ceil(len / 2));
    console.log(left, right);
  } else if (len % 2 === 0) {
    left = String(number).slice(0, Math.floor(len / 2) - 1);
    right = String(number).slice(Math.ceil(len / 2) + 1);
    console.log(left, right);
  }
  left = left.split("").reduce((acc, cur) => +acc + +cur, 0);
  right = right.split("").reduce((acc, cur) => +acc + +cur, 0);

  return left === right ? "Balanced" : "Not Balanced";
}

console.log(balancedNum(7));
console.log(balancedNum(959));
console.log(balancedNum(13));
console.log(balancedNum(432));
console.log(balancedNum(424));
console.log(balancedNum(1024));
console.log(balancedNum(66545));
console.log(balancedNum(295591));
console.log(balancedNum(1230987));
console.log(balancedNum(56239814));
