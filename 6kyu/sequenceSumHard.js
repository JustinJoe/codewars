/* 
As the title suggests, this is the hard-core version of another neat kata.

The task is simple to explain: simply sum all the numbers from the first parameter being the 
beginning to the second parameter being the upper limit (possibly included), going in steps 
expressed by the third parameter:

If it is an impossible sequence (with the beginning being larger the end and a positive step or 
the other way around), just return 0. See the provided test cases for further examples :)
    
Note: differing from the other base kata, much larger ranges are going to be tested, so you 
should hope to get your algo optimized and to avoid brute-forcing your way through the solution.
*/

// P: Takes in an 3 integers - begin, end and step
// R: Returns an integer
// E:
// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6
// sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1,5,3) === 5 // 1 + 4
// sequenceSum(-1, -5, -3) == -5
// sequenceSum(16, 15, 3) === 0
// P:

function sequenceSum(begin, end, step) {
  // create an array of the sequence
  //    loop from begin to end
  //    increasing by step
  // sum up array

  let sum = 0;

  for (let i = begin; step > 0 ? i <= end : i >= end; i += step) {
    sum += i;
  }

  return sum;
}

console.log(sequenceSum(2, 2, 2));
console.log(sequenceSum(2, 6, 2));
console.log(sequenceSum(1, 5, 1));
console.log(sequenceSum(1, 5, 3));
console.log(sequenceSum(-1, -5, -3));
console.log(sequenceSum(16, 15, 3));
