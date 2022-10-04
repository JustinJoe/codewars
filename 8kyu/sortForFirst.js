/* 
You will be given a list of strings. You must sort it alphabetically (case-sensitive, 
and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/
// P: Takes in an array
// R: Returns a string
// E:
// ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"] -->
// 'b***i***t***c***o***i***n'
// ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"] -->
// 'a***r***e'
// P:
function sortForFirst(array) {
  // sort array
  // split first element
  // join with "***"

  array = array.sort();
  return array[0].split("").join("***");
}

console.log(
  sortForFirst([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);
console.log(
  sortForFirst([
    "turns",
    "out",
    "random",
    "test",
    "cases",
    "are",
    "easier",
    "than",
    "writing",
    "out",
    "basic",
    "ones",
  ])
);
