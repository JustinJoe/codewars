/* 
There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and 
price (per mango), calculate the total cost of the mangoes.

Examples
totalCost(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
totalCost(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free
*/
// P: Takes in two integers - quantity and price
// R: Returns an integer
// E:
// totalCost(3, 3) ==> 6
// totalCost(9, 5) ==> 30
// P:
function totalCost(quantity, price) {
  // 2(price) = (quantity)/3

  let total = 0;

  for (let i = quantity; quantity > 0; i--) {
    quantity--;
    total += price;
    if (quantity > 0) {
      quantity--;
      total += price;
    }
    if (quantity > 0) {
      quantity--;
    }
  }

  return total;
}

console.log(totalCost(3, 3));
console.log(totalCost(9, 5));
