/* 
We need to write some code to return the original price of a product, the return type must 
be of type decimal and the number must be rounded to two decimal places.

We will be given the sale price (discounted price), and the sale percentage, our job is 
to figure out the original price.

For example:
Given an item at $75 sale price after applying a 25% discount, the function should return 
the original price of that item before applying the sale percentage, which is ($100.00) 
of course, rounded to two decimal places.

DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price), 
25 is the sale percentage and 100 is the original pric
*/
// P: Takes in two integers
// R: Returns an integer
// E:
// discoverOriginalPrice(75,25) --> 100;
// discoverOriginalPrice(25,75) --> 100;
// discoverOriginalPrice(75.75,25) --> 101;
// P:
function discoverOriginalPrice(discountedPrice, salePercentage) {
  return +((100 / (100 - salePercentage)) * discountedPrice).toFixed(2);
}

console.log(discoverOriginalPrice(75, 25));
console.log(discoverOriginalPrice(25, 75));
console.log(discoverOriginalPrice(75.75, 25));