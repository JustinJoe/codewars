/* 
Implement the function unique_in_order which takes as argument a sequence and returns a list of items 
without any elements with the same value next to each other and preserving the original order of 
elements.

For example:

*/

// P: Takes in a string or array
// R: Returns an array
// E:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
// P:

function uniqueInOrder(sequence) {
  //check if sequence is an array or string
  //split into single values
  //check if each element is the same as the next

  //   if (typeof sequence === "string") {
  //     return sequence.split("").filter((char, i) => char != sequence[i + 1]);
  //   } else {
  //     return sequence.filter((char, i) => char != sequence[i + 1]);
  //   }

  return typeof sequence === "string"
    ? sequence.split("").filter((char, i) => char != sequence[i + 1])
    : sequence.filter((char, i) => char != sequence[i + 1]);
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
