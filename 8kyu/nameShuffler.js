/* 
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

*/

// P: Takes in a string
// R: Returns a string
// E:
// "john McClane" --> "McClane john"
// 'Mary jeggins' --> 'jeggins Mary'
// 'tom jerry' --> 'jerry tom'
// P:

function nameShuffler(str) {
  // splits name with space
  // reverses array
  // joins array with space

  return str.split(" ").reverse().join(" ");
}

console.log(nameShuffler("john McClane"));
console.log(nameShuffler("Mary jeggins"));
console.log(nameShuffler("tom jerry"));
