/* 
We want to generate a function that computes the series starting from 0 and ending until 
the given number.

Example:
6 --> 0+1+2+3+4+5+6 = 21
-15 --> -15<0
0 --> 0=0
*/

// P: Takes in an integer
// R: Returns a string
// E:

// P:
function sequenceSeriesSum(num) {
  let array = [];

  for (let i = 0; i <= num; i++) {
    array.push(i);
  }
  return num === 0
    ? "0=0"
    : num < 0
    ? `${num}<0`
    : `${array.join("+")} = ${array.reduce((acc, cur) => acc + cur, 0)}`;
}

console.log(sequenceSeriesSum(6));
console.log(sequenceSeriesSum(-15));
console.log(sequenceSeriesSum(0));
