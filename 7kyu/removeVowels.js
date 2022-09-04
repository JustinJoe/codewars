/* 
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, 
neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels 
removed.
Note: for this kata y isn't considered a vowel.
*/

// P: Takes in a string
// R: Returns a string with no vowels
// E:
// "This website is for losers LOL!" --> "Ths wbst s fr lsrs LL!"
// P:
function removeVowels(text) {
  // Split into char
  // Filter vowels out

  //   return text
  //     .split("")
  //     .filter(
  //       (char) =>
  //         char !== "a" &&
  //         char !== "e" &&
  //         char !== "i" &&
  //         char !== "o" &&
  //         char !== "u" &&
  //         char !== "A" &&
  //         char !== "E" &&
  //         char !== "I" &&
  //         char !== "O" &&
  //         char !== "U"
  //     )
  //     .join("");

  // Alternate Approach
  // replace vowels with empty strng

  return text.replace(/[aeiou]/gi, "");
}

console.log(removeVowels("This website is for losers LOL!"));
