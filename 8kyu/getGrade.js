/* 
Complete the function so that it finds the average of the three scores passed to it and 
returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or 
values greater than 100.
*/

// P: Takes in three integers
// R: Returns a string
// E:
// getGrade(100,85,96), 'A'
// getGrade(70, 70, 100), "B";
// getGrade(75, 70, 79), "C";
// getGrade(66, 62, 68), "D";
// getGrade(48, 55, 52), "F";
// P:
function getGrade(score1, score2, score3) {
  // add up scores
  // find average
  // return corresponding string

  let average = (score1 + score2 + score3) / 3;

  return average >= 90
    ? "A"
    : average >= 80
    ? "B"
    : average >= 70
    ? "C"
    : average >= 60
    ? "D"
    : "F";
}

console.log(getGrade(100, 85, 96));
console.log(getGrade(70, 70, 100));
console.log(getGrade(75, 70, 79));
console.log(getGrade(66, 62, 68));
console.log(getGrade(48, 55, 52));
