/* 
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky 
days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.
*/
// P: Takes in an integer
// R: Returns an integer
// E:
// unluckyDays(1586) --> 1;
// unluckyDays(1001) --> 3;
// unluckyDays(2819) --> 2;
// unluckyDays(2792) --> 2;
// unluckyDays(2723) --> 2;
// unluckyDays(1909) --> 1;
// unluckyDays(1812) --> 2;
// unluckyDays(1618) --> 2;
// unluckyDays(2132) --> 1;
// unluckyDays(2065) --> 3;
// P:
function unluckyDays(year) {
  //your code here

  let unluckyDays = 0;

  for (let i = 0; i < 12; i++) {
    if (new Date(year, i, 13).getDay() === 5) unluckyDays++;
  }
  return unluckyDays;
}

console.log(unluckyDays(1586));
console.log(unluckyDays(1001));
console.log(unluckyDays(2819));
console.log(unluckyDays(2792));
console.log(unluckyDays(2723));
console.log(unluckyDays(1909));
console.log(unluckyDays(1812));
console.log(unluckyDays(1618));
console.log(unluckyDays(2132));
console.log(unluckyDays(2065));
