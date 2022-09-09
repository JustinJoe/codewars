/* 
You need to write a function that reverses the words in a given string. A word can also fit an 
empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

*/

// P: Takes in a string
// R: Returns a string
// E:
// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// P:

function reverseWords(text) {
  // split into words
  // reverse array
  // join array

  return text.split(" ").reverse().join(" ");
}

console.log(reverseWords("Hello World"));
console.log(reverseWords("Hi There."));
