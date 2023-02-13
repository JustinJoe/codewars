/* 
In this kata you will have to write a function that takes litres and pricePerLitre (in 
dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more 
litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum 
discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. 
Return the total cost rounded to 2 decimal places. Also you can guess that there will not 
be negative or non-numeric inputs.

Good Luck!
*/
// P: Takes in two integers
// R: Returns an integer
// E:
// fuelPrice(5, 1.23) --> 5.65;
// fuelPrice(8, 2.5) --> 18.40;
// fuelPrice(5, 5.6) --> 27.50;
// P:
function fuelPrice(litres, pricePerLitre) {
  return litres >= 10
    ? +(litres * pricePerLitre - litres * 0.25).toFixed(2)
    : litres >= 8
    ? +(litres * pricePerLitre - litres * 0.2).toFixed(2)
    : litres >= 6
    ? +(litres * pricePerLitre - litres * 0.15).toFixed(2)
    : litres >= 4
    ? +(litres * pricePerLitre - litres * 0.1).toFixed(2)
    : litres >= 2
    ? +(litres * pricePerLitre - litres * 0.05).toFixed(2)
    : +(litres * pricePerLitre).toFixed(2);
}

console.log(fuelPrice(5, 1.23));
console.log(fuelPrice(8, 2.5));
console.log(fuelPrice(5, 5.6));
