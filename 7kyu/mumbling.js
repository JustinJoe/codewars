/* 
This time no story, no theory. The examples below show you how to write function accum:

Examples:
The parameter of mumbling is a string which includes only letters from a..z and A..Z.
*/

// P: Takes in a string
// R: Returns a string
// E:
// mumbling("abcd") -> "A-Bb-Ccc-Dddd"
// mumbling("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// mumbling("cwAt") -> "C-Ww-Aaa-Tttt"
// P:
function mumbling(string) {
  // Repeat letter (index + 1) times
  // Join with a hyphen

  return [...string]
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join("-");
}

console.log(mumbling("abcd"));
console.log(mumbling("RqaEzty"));
console.log(mumbling("cwAt"));
