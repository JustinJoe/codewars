/* 
Complete the solution so that it returns a formatted string. The return value should 
equal "Value is VALUE" where value is a 5 digit padded number.
*/
// P: Takes in an integer
// R: Returns a string
// E:
// paddedNumber(5) --> "Value is 00005";
// paddedNumber(1204) --> "Value is 01204";
// paddedNumber(109) --> "Value is 00109";
// paddedNumber(0) --> "Value is 00000";
// P:
function paddedNumber(num) {
  num = String(num);

  return `Value is ${num.padStart(5, "0")}`;
}

console.log(paddedNumber(5));
console.log(paddedNumber(1204));
console.log(paddedNumber(109));
console.log(paddedNumber(0));
