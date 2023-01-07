/* 
Write a function that calculates the original product price, without VAT.

Example
If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) 
is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

VAT is always 15% for the purposes of this Kata.
Round the result to 2 decimal places.
If null value given then return -1
*/
// P: Takes in an integer
// R: Returns an integer
// E:
// excludingVatPrice(230) --> 200.00;
// excludingVatPrice(123) --> 106.96;
// excludingVatPrice(null) --> -1;
// P:
function excludingVatPrice(price) {
  return price === null ? -1 : +((price / 115) * 100).toFixed(2);
}

console.log(excludingVatPrice(230));
console.log(excludingVatPrice(123));
console.log(excludingVatPrice(null));
