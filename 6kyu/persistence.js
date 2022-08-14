/* 
Write a function, persistence, that takes in a positive parameter num and returns 
its multiplicative persistence, which is the number of times you must multiply the 
digits in num until you reach a single digit.
*/

//P: Takes in a positive integer as a parameter
//R: Returns a single digit
//E:
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)
//P:
function persistence(num) {
  //check if num is more than one digit
  //Loop and multiply the digits
  //count number of times

  let count = 0;

  num = num.toString();

  while (num.length > 1) {
    count++;
    num = num
      .split("")
      .reduce((acc, curr) => acc * curr)
      .toString();
  }
  return count;
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));
