/* 
A Tidy number is a number whose digits are in non-decreasing order.
Task
Given a number, Find if it is Tidy or not.

Notes
Number passed is always Positive.
Return the result as a Boolean
*/
// P: Takes in an integer
// R: Returns a boolean
// E:
// tidyNumber(12) --> true;
// tidyNumber(102) --> false;
// tidyNumber(9672) --> false;
// tidyNumber(2789) --> true;
// tidyNumber(2335) --> true;
// P:
function tidyNumber(number) {
  number = String(number);

  for (let i = 0; i < number.length - 1; i++) {
    if (number[i] > number[i + 1]) return false;
  }

  return true;
}

console.log(tidyNumber(12));
console.log(tidyNumber(102));
console.log(tidyNumber(9672));
console.log(tidyNumber(2789));
console.log(tidyNumber(2335));
