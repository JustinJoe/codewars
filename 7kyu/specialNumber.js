/* 
A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5
Given a number determine if it special number or not .

Notes
The number passed will be positive (N > 0) .
All single-digit numbers within the interval [1:5] are considered as special number.
*/
// P: Takes in an integer
// R: Returns a string
// E:
// specialNumber(2) -->"Special!!";
// specialNumber(3) -->"Special!!";
// specialNumber(6) -->"NOT!!";
// specialNumber(9) -->"NOT!!";
// specialNumber(11) -->"Special!!";
// specialNumber(55) -->"Special!!";
// specialNumber(26) -->"NOT!!";
// specialNumber(92) -->"NOT!!";
// specialNumber(25432) -->"Special!!";
// specialNumber(2783) -->"NOT!!";
// P:
function specialNumber(n) {
  return [...String(n)].every(
    (num) => !(num == 6 || num == 7 || num == 8 || num == 9)
  )
    ? "Special!!"
    : "NOT!!";
}

console.log(specialNumber(2));
console.log(specialNumber(3));
console.log(specialNumber(6));
console.log(specialNumber(9));
console.log(specialNumber(11));
console.log(specialNumber(55));
console.log(specialNumber(26));
console.log(specialNumber(92));
console.log(specialNumber(25432));
console.log(specialNumber(2783));
