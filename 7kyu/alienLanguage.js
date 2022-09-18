/* 
Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

We translate the sentence into an alien language according to the following rules:

Each word in the sentence is separated by spaces. The last letter of each word in the sentence 
turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is 
the form of alien language ;-)

A small hint: The first conversion of the entire string will make the code easier
*/

// P: Takes in a string
// R: Returns a string
// E:
// alienLanguage("My name is John") should return "My NAMe Is JOHn"
// alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
// alienLanguage("Hello World") should return "HELLo WORLd"
// P:

function alienLanguage(str) {
  // split string
  // loop through
  // slice words and capitalise each char save last
  // join

  str = str.split(" ");

  for (let i = 0; i < str.length; i++) {
    str[i] =
      str[i].slice(0, str[i].length - 1).toUpperCase() +
      str[i].slice(str[i].length - 1).toLowerCase();
  }

  return str.join(" ");
}

console.log(alienLanguage("My name is John"));
console.log(alienLanguage("this is an example"));
console.log(alienLanguage("Hello World"));
