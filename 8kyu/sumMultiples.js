/* 
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
*/
// P: Takes in two integers
// R: Returns an integer
// E:
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"
// P:
function sumMul(num1, num2) {
  let sum = 0;

  if (num1 >= num2) {
    return "INVALID";
  } else {
    for (let i = num1; i < num2; i += num1) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumMul(2, 9));
console.log(sumMul(3, 13));
console.log(sumMul(4, 123));
console.log(sumMul(4, -7));
