/* 
This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.
*/
// P: Takes in two integers
// R: Returns a boolean
// E:
// factorCheck(10,2) --> true;
// factorCheck(63,7) --> true;
// factorCheck(2450,5) --> true;
// factorCheck(24612,3) --> true;
// factorCheck(9,2) --> false;
// factorCheck(653,7) --> false;
// factorCheck(2453,5) --> false;
// factorCheck(24617,3) --> false;
// P:
function factorCheck(base, factor) {
  return base % factor === 0;
}

console.log(factorCheck(10, 2));
console.log(factorCheck(63, 7));
console.log(factorCheck(2450, 5));
console.log(factorCheck(24612, 3));
console.log(factorCheck(9, 2));
console.log(factorCheck(653, 7));
console.log(factorCheck(2453, 5));
console.log(factorCheck(24617, 3));
