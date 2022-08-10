/* 
After a hard quarter in the office you decide to get some rest on a vacation. So you 
will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager 
of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get 
$50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 
off your total.

Write a code that gives out the total amount for different days(d).
*/

//P: Takes in an integer
//R: Returns an integer
//E:
// rentalCarCost(3) --> 100
// rentalCarCost(4) --> 140
// rentalCarCost(6) --> 220
// rentalCarCost(7) --> 230
// rentalCarCost(9) --> 310
//P:

function rentalCarCost(d) {
  //if d > 7, total - 50
  //if d > 3, total - 20
  //else total
  let total = d * 40;

  return d >= 7 ? total - 50 : d >= 3 ? total - 20 : total;
}

console.log(rentalCarCost(3));
console.log(rentalCarCost(4));
console.log(rentalCarCost(6));
console.log(rentalCarCost(7));
console.log(rentalCarCost(9));
