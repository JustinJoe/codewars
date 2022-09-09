/* 
Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples

*/

// P: Takes in three integers - begin, end and step
// R: Returns an integer
// E:
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
// P:

function sumSequence(begin, end, step) {
  // create an array of the sequence
  //    loop from begin to end
  //    increasing by step
  // sum up array

  let arr = [];

  for (let i = begin; i <= end; i += step) {
    arr.push(i);
  }

  return arr.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumSequence(2, 2, 2));
console.log(sumSequence(2, 6, 2));
console.log(sumSequence(1, 5, 1));
console.log(sumSequence(1, 5, 3));
