/* 
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number 
in a binary format.

*/
// P: Takes in an integer
// R: Returns an integer
// E:
// toBinary(1)  /* should return 1
// toBinary(5)  /* should return 101
// toBinary(11) /* should return 1011
// P:
function toBinary(num) {
  return +parseInt(num).toString(2);
}

console.log(toBinary(1));
console.log(toBinary(5));
console.log(toBinary(11));
