/* 
Each number should be formatted that it is rounded to two decimal places. You don't 
need to check whether the input is a valid number because only valid numbers are 
used in the tests.

Example:    
*/
// P: Takes in an integer
// R: Returns an integer
// E:
// 5.5589 is rounded 5.56
// 3.3424 is rounded 3.34
// P:
function twoDecimalPlaces(num) {
  // round to 2 decimal places

  return +num.toFixed(2);
}

console.log(twoDecimalPlaces(5.5589));
console.log(twoDecimalPlaces(3.3424));
