/* 
Complete the function that calculates the area of the red square, when the length of the 
circular arc A is given as the input. Return the result rounded to two decimals.


Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/
// P: Takes in an integer
// R: Returns an integer
// E:
// squareArea(2) --> 1.62
// squareArea(0) --> 0
// squareArea(14.05) --> 80
// P:
function squareArea(A) {
  let radius = (2 * A) / Math.PI;
  return +(radius * radius).toFixed(2);
}

console.log(squareArea(2));
console.log(squareArea(0));
console.log(squareArea(14.05));
