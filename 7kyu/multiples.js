/* 
Implement a function, multiples(m, n), which returns an array of the first m multiples 
of the real number n. Assume that m is a positive integer.
*/
// P: Takes in two integers
// R: Returns an array
// E:
// multiples(3, 5) --> [5, 10, 15];
function multiples(m, n) {
  let array = [];
  for (let i = 1; i <= m; i++) {
    array.push(n * i);
  }
  return array;
}

console.log(multiples(3, 5));
