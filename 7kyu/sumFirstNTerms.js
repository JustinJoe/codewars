/* 
Your task is to write a function which returns the sum of following series up to nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.
If the given value is 0 then it should return 0.00
You will only be given Natural Numbers as arguments.

*/

//P: Takes the nth number in a series as its parameter
//R: Returns a string, the sum to the nth term(parameter) rounded to 2 decimal places
//E:
// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
//P:
function seriesSum(n) {
  //split series into an array
  //reduce seriesArr based on the parameter n
  //correct to 2 decimal places
  //return as a string
  let seriesArr = [];
  let i = 1;
  let denominator = 1;

  for (i; i <= n; i++) {
    seriesArr.push(1 / denominator);

    denominator += 3;
  }

  return n > 0
    ? seriesArr
        .filter((num, i) => i < n)
        .reduce((acc, curr) => acc + curr)
        .toFixed(2)
    : "0.00";
}

console.log(seriesSum(0));
console.log(seriesSum(1));
console.log(seriesSum(2));
console.log(seriesSum(5));
