/* 
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)
*/

// P: Takes in an integer, n
// R: Returns an integer
// E:
// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  //get array of odd numbers
  //sum last n values

  let oddNum = [];

  for (let i = 1; i <= n ** 2 + n - 1; i++) {
    if (i % 2 == 1) {
      oddNum.push(i);
    }
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }

  return oddNum
    .filter((num, i) => i >= sum)
    .reduce((acc, cur) => +acc + +cur, 0);
}

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(42));
