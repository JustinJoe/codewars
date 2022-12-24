/* 
Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of 
the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is 
case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2
Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: 
https://en.wikipedia.org/wiki/Slope
*/

// P: Takes in an array with four integers
// R: Returns a string
// E:
// slope([19,3,20,3]) --> "0";
// slope([2,7,4,-7]) --> "-7";
// slope([10,50,30,150]) --> "5";
// slope([15,45,12,60]) --> "-5";
// slope([10,20,20,80]) --> "6";
// slope([-10,6,-10,3]) --> "undefined";
// P:
function slope(points) {
  let den = points[0] - points[2];
  let num = points[1] - points[3];
  return den == 0 ? "undefined" : num == 0 ? "0" : String(num / den);
}

console.log(slope([19, 3, 20, 3]));
console.log(slope([2, 7, 4, -7]));
console.log(slope([10, 50, 30, 150]));
console.log(slope([15, 45, 12, 60]));
console.log(slope([10, 20, 20, 80]));
console.log(slope([-10, 6, -10, 3]));
