/* 
Find the total sum of internal angles (in degrees) in an n-sided simple 
polygon. N will be greater than 2.
*/

// P: Takes in an integer
// R: Returns an integer
// E:
// totalAngles(3) --> 180
// totalAngles(4) --> 360
// P:
function totalAngles(n) {
  // 180(n - 2) for total angles

  return 180 * (n - 2);
}

console.log(totalAngles(3));
console.log(totalAngles(4));
