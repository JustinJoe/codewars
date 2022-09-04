/* 
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.


0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/
// P: Takes in three integers - h, m and s
// R: Returns an integer
// E:
// h = 0
// m = 1
// s = 1

// result = 61000

// P:

function getTimeInMilliSec(h, m, s) {
  // convert each parameter to milliseconds

  return h * 60 * 60000 + m * 60000 + s * 1000;
}

console.log(getTimeInMilliSec(0, 1, 1));
