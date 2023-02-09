/* 
This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.
*/
// P: Takes in an integer
// R: Returns a string - binary or hexadecimal
// E:
// 2 -->'10';
// 13 -->'d';
// 47 -->'2f';
// 0 -->'0';
// 12800 -->'11001000000000';
// 8172381723 -->'1e71ca61b';
// P:
function evenAndOdds(num) {
  return num % 2 === 0 ? num.toString(2) : num.toString(16);
}

console.log(evenAndOdds(2));
console.log(evenAndOdds(13));
console.log(evenAndOdds(47));
console.log(evenAndOdds(0));
console.log(evenAndOdds(12800));
console.log(evenAndOdds(8172381723));
