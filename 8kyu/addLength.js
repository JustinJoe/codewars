/* 
What if we need the length of the words separated by a space to be added at the end of that 
same word and have it returned as an array?

Your task is to write a function that takes a String and returns an Array/list with the 
length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/
// P: Takes in a string
// R: Returns an array
// E:
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// P:
function addLength(str) {
  // split str with space
  // loop and return each word and its length as a string

  return str.split(" ").map((word) => `${word} ${word.length}`);
}

console.log(addLength("apple ban"));
console.log(addLength("you will win"));
