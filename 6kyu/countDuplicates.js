/* 
Write a function that will return the count of distinct case-insensitive alphabetic characters and 
numeric digits that occur more than once in the input string. The input string can be assumed to 
contain only alphabets (both uppercase and lowercase) and numeric digits.

*/

// P: Takes in a string
// R: Returns an integer
// E:
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
// P:

function countDuplicates(string) {
  // convert string to lowercase
  // split string
  // filter for repeated char
  // create a Set (unique elements) from it
  // create an Array from Set
  // check length

  string = string.toLowerCase();

  return Array.from(
    new Set(
      string
        .split("")
        .filter((char) => string.indexOf(char) !== string.lastIndexOf(char))
    )
  ).length;
}

console.log(countDuplicates("abcde"));
console.log(countDuplicates("aabbcde"));
console.log(countDuplicates("aabBcde"));
console.log(countDuplicates("indivisibility"));
console.log(countDuplicates("Indivisibilities"));
console.log(countDuplicates("aA11"));
console.log(countDuplicates("ABBA"));
