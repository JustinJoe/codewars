/* 
Return the type of the sum of the two arguments
*/
// P: Takes in two arguments
// R: Returns the type
// E:
// typeOfSum(12, 1) --> 'number'
// typeOfSum('d', 1) --> 'string'
// typeOfSum(1, 'a') --> 'string'
// typeOfSum('dd', '') --> 'string'
// typeOfSum(true, 1) --> 'number'
// typeOfSum('s', false) --> 'string'
// typeOfSum(null, 1) --> 'number'
// typeOfSum('s', null) --> 'string'
// typeOfSum(null, undefined) --> 'number'
// typeOfSum(undefined, 're') --> 'string'
// typeOfSum(undefined, true) --> 'number'
// typeOfSum(null, false) --> 'number'
// P:
function typeOfSum(a, b) {
  return typeof (a + b);
}

console.log(typeOfSum(12, 1));
console.log(typeOfSum("d", 1));
console.log(typeOfSum(1, "a"));
console.log(typeOfSum("dd", ""));
console.log(typeOfSum(true, 1));
console.log(typeOfSum("s", false));
console.log(typeOfSum(null, 1));
console.log(typeOfSum("s", null));
console.log(typeOfSum(null, undefined));
console.log(typeOfSum(undefined, "re"));
console.log(typeOfSum(undefined, true));
console.log(typeOfSum(null, false));
