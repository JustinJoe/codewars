/* 
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the 
number of customers to buy hotdogs, different numbers have different prices (refer to the following 
table), return a number that the customer need to pay how much money.

number	price (cents)
n < 5 -- n * 100
n >= 5 and n < 10 -- n * 95
n >= 10	-- n * 90
You can use if..else or ternary operator to complete it.
*/

// P: Takes in an integer n
// R: Returns an integer
// E:
// saleHotdogs(1) --> 100
// saleHotdogs(4) --> 400
// saleHotdogs(5) --> 475
// saleHotdogs(9) --> 855
// saleHotdogs(10) --> 900
// saleHotdogs(100) --> 9000
// P:

function saleHotdogs(n) {
  // if n < 5 return 100
  // if n >= 5 & n < 10 return 95
  // if n >= 10 return 90

  return n < 5 ? 100 * n : n < 10 ? n * 95 : n * 90;
}

console.log(saleHotdogs(1));
console.log(saleHotdogs(4));
console.log(saleHotdogs(5));
console.log(saleHotdogs(9));
console.log(saleHotdogs(10));
console.log(saleHotdogs(100));
