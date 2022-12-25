/* 
There are pillars near the road. The distance between the pillars is the same and the 
width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without 
the width of the first and last pillar).
*/
// P: Takes in three integers
// R: Returns an integer in cm
// E:
// distanceBtnPillars(1, 10, 10) --> 0
// distanceBtnPillars(2, 20, 25) --> 2000
// distanceBtnPillars(11, 15, 30) --> 15270
// P:
function distanceBtnPillars(numPill, dist, width) {
  // your code here
  return numPill >= 2 ? dist * 100 * (numPill - 1) + width * (numPill - 2) : 0;
}

console.log(distanceBtnPillars(1, 10, 10));
console.log(distanceBtnPillars(2, 20, 25));
console.log(distanceBtnPillars(11, 15, 30));
