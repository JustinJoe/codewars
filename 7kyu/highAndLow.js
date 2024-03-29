/* 
In this little assignment you are given a string of space separated numbers, and have to 
return the highest and lowest number.

Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/
// P: Takes in a string
// R: Returns a string
// E:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// P:
function highAndLow(numbers) {
  // split string by space
  // map and parseInt
  // sort in descending order
  // return [0] [length - 1]

  numbers = numbers
    .split(" ")
    .map((num) => +num)
    .sort((a, b) => b - a);
  return `${numbers[0]} ${numbers[numbers.length - 1]}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
