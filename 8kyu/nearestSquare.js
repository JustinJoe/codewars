/* 
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
*/
// P: Takes in an integer
// R: Returns an integer
// E:
// nearestSquare(1) --> 1
// nearestSquare(2) --> 1
// nearestSquare(10) --> 9
// nearestSquare(111) --> 121
// nearestSquare(9999) --> 10000
// P:
function nearestSquare(num) {
  // Math.sqrt
  // Math.round
  // Math.pow

  return Math.pow(Math.round(Math.sqrt(num)), 2);
}

console.log(nearestSquare(1));
console.log(nearestSquare(2));
console.log(nearestSquare(10));
console.log(nearestSquare(111));
console.log(nearestSquare(9999));
