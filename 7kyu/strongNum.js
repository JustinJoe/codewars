/* 
Strong number is the number that the sum of the factorial of its digits is equal to 
number itself.
For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.
Task
Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not 
Strong !!".

Notes
Number passed is always Positive.
Return the result as String
*/
// P: Takes in an integer
// R: Returns a string
// E:
// strongNum(1) --> "STRONG!!!!";
// strongNum(2) --> "STRONG!!!!";
// strongNum(145) --> "STRONG!!!!";
// strongNum(7) --> "Not Strong !!";
// strongNum(93) --> "Not Strong !!";
// strongNum(185) --> "Not Strong !!";
// P:
function strongNum(integer) {
  let num = [...String(integer)];

  let total = num
    .map((cur) => {
      let total = 1;
      for (let i = 2; i <= +cur; i++) {
        total *= i;
      }
      return total;
    })
    .reduce((acc, cur) => acc + cur, 0);

  return integer === total ? "STRONG!!!!" : "Not Strong !!";
}

console.log(strongNum(1));
console.log(strongNum(2));
console.log(strongNum(145));
console.log(strongNum(7));
console.log(strongNum(93));
console.log(strongNum(185));
