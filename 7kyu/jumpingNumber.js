/* 
Given a number, Find if it is Jumping or not.
Number passed is always Positive .

Return the result as String .
The difference between ‘9’ and ‘0’ is not considered as 1 .
All single digit numbers are considered as Jumping numbers.
*/
// P: Takes in an integer
// R: Returns a string
// E:
// jumpingNumber(1) --> "Jumping!!";
// jumpingNumber(7) --> "Jumping!!";
// jumpingNumber(9) --> "Jumping!!";
// jumpingNumber(23) --> "Jumping!!";
// jumpingNumber(32) --> "Jumping!!";
// jumpingNumber(79) --> "Not!!";
// jumpingNumber(98) --> "Jumping!!";
// jumpingNumber(8987) --> "Jumping!!";
// jumpingNumber(4343456) --> "Jumping!!";
// jumpingNumber(98789876) --> "Jumping!!";
// P:
function jumpingNumber(num) {
  num = [...String(num)];

  for (let i = 0; i < num.length - 1; i++) {
    if (Math.abs(num[i + 1] - num[i]) !== 1) return "Not!!";
  }
  return "Jumping!!";
}

console.log(jumpingNumber(1));
console.log(jumpingNumber(7));
console.log(jumpingNumber(9));
console.log(jumpingNumber(23));
console.log(jumpingNumber(32));
console.log(jumpingNumber(79));
console.log(jumpingNumber(98));
console.log(jumpingNumber(8987));
console.log(jumpingNumber(4343456));
console.log(jumpingNumber(98789876));
