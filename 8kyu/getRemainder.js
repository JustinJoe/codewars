/* 
Write a function that accepts two integers and returns the remainder of dividing the 
larger value by the smaller value.

Division by zero should return NaN.
*/
// P: Takes in two integers
// R: Returns an integer or NaN
// E:
// getRemainder(17,5) --> 2
// getRemainder(13, 72) --> 7
// getRemainder(1, 0) --> NaN
// getRemainder(0, 0) --> NaN
// P:
function getRemainder(n, m) {
  //   return (m < n && m === 0) || (m > n && n === 0) ? NaN : m < n ? n % m : m % n;
  return m < n ? n % m : m % n;
}

console.log(getRemainder(17, 5));
console.log(getRemainder(13, 72));
console.log(getRemainder(1, 0));
console.log(getRemainder(0, 0));
