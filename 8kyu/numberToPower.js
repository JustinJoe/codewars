/* 
The goal is to create a function 'numberToPower(number, power)' that "raises" the number 
up to power (ie multiplies number by itself power times).

Examples

Note: Math.pow and some other Math functions like eval() and ** are disabled.
*/
// P: Takes in two integers
// R: Returns an integer
// E:
// numberToPower(3,2)   -> 9 ( = 3 * 3 )
// numberToPower(2,3)   -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6)  -> 1000000
// numberToPower(4, 2)  -> 16;
// numberToPower(10, 4) -> 10000;
// numberToPower(10, 0) -> 1;
// P:
function numberToPower(number, power) {
  let product = 1;

  for (let i = 0; i < power; i++) {
    product *= number;
  }

  return product;
}

console.log(numberToPower(3, 2));
console.log(numberToPower(2, 3));
console.log(numberToPower(10, 6));
console.log(numberToPower(4, 2));
console.log(numberToPower(10, 4));
console.log(numberToPower(10, 0));
