/* 
If　a = 1, b = 2, c = 3 ... z = 26
Then l + o + v + e = 54
and f + r + i + e + n + d + s + h + i + p = 108
So friendship is twice stronger than love :-)
The input will always be in lowercase and never be empty.
*/
// P: Takes in a string
// R: Returns an integer
// E:
// wordsToMarks("attitude") --> 100)
// wordsToMarks("friends") --> 75)
// wordsToMarks("family") --> 66)
// wordsToMarks("selfness") --> 99)
// wordsToMarks("knowledge") --> 96)
// P:
function wordsToMarks(word) {
  // split word into letters
  // reduce with
  // get charCodeAt(index) - 96

  return [...word].reduce((acc, cur) => acc + cur.charCodeAt() - 96, 0);
}

console.log(wordsToMarks("attitude"));
console.log(wordsToMarks("friends"));
console.log(wordsToMarks("family"));
console.log(wordsToMarks("selfness"));
console.log(wordsToMarks("knowledge"));
