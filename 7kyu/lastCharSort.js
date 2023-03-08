/* 
Given a string of words (x), you need to return an array of the words, sorted 
alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order 
they appeared in the given string.

All inputs will be valid.
*/
// P: Takes in a string
// R: Returns an array
// E:
// lastCharSort('man i need a taxi up to ubud') -->
// ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// lastCharSort('what time are we climbing up the volcano') -->
// ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// lastCharSort('take me to semynak') --> ['take', 'me', 'semynak', 'to']
// P:
function lastCharSort(string) {
  return string
    .split(" ")
    .sort(
      (a, b) => a[a.length - 1].charCodeAt() - b[b.length - 1].charCodeAt()
    );
}
console.log(lastCharSort("man i need a taxi up to ubud"));
console.log(lastCharSort("what time are we climbing up the volcano"));
console.log(lastCharSort("take me to semynak"));
