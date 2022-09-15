/* 
The number 89 is the first integer with more than one digit that fulfills the property partially 
introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives 
the same number.

In effect: 89 = 8^1 + 9^2
The next number in having this property is 135.
See this property again: 135 = 1^1 + 3^2 + 5^3
We need a function to collect these numbers, that may receive two integers a, b that defines 
the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that 
fulfills the property described above.
Let's see some cases (input -> output):
1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty 
list.
90, 100 --> []
*/

// P: Takes in two integers
// R: Returns an array
// E:
// 1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// 90, 100 --> []
// P:

function sumDigitPow(num1, num2) {
  // get range of integers from num1 to num2
  // filter integers === sum of digits raised to consecutive powers

  let arr = [];

  for (let i = num1; i <= num2; i++) {
    arr.push(i);
  }

  return arr.filter((num) => {
    let a = String(num);

    return (
      a
        .split("")
        .reduce((x, y, i) => parseInt(x) + Math.pow(parseInt(y), i + 1), 0) ==
      num
    );
  });
}

console.log(sumDigitPow(1, 10));
console.log(sumDigitPow(1, 100));
console.log(sumDigitPow(90, 100));
