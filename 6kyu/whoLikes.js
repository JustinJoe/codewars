/* 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It 
must return the display text as shown in the examples:

Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

// P: Takes in an array, names
// R: Returns a string
// E:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// P:

function whoLikes(names) {
  // Check number of names in array
  // 0 = "no one likes this"
  // 1 = "A likes this"
  // 2 = "A and B like this"
  // 3 = "A, B and C like this"
  // 4 = "A, B and 2 others like this"
  // > x = "A, B and (x - 2) others like this"

  let length = names.length;

  return length === 0
    ? "no one likes this"
    : length === 1
    ? `${names[0]} likes this`
    : length === 2
    ? `${names[0]} and ${names[1]} like this`
    : length === 3
    ? `${names[0]}, ${names[1]} and ${names[2]} like this`
    : `${names[0]}, ${names[1]} and ${length - 2} others like this`;
}

console.log(whoLikes([]));
console.log(whoLikes(["Peter"]));
console.log(whoLikes(["Jacob", "Alex"]));
console.log(whoLikes(["Max", "John", "Mark"]));
console.log(whoLikes(["Alex", "Jacob", "Mark", "Max"]));
