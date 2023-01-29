/* 
The aim of this kata is to split a given string into different strings of equal size 
(note size of strings is passed to the method)
*/
// P: Takes in a string
// R: Returns a string
// E:
// splitInParts("supercalifragilisticexpialidocious", 3) --> "sup erc ali fra gil ist ice xpi ali doc iou s";
// splitInParts("HelloKata", 1) --> "H e l l o K a t a";
// splitInParts("HelloKata", 9) --> "HelloKata";
// P:
function splitInParts(string, num) {
  let arr = [];

  for (let i = 0; i < string.length; num) {
    arr.push(string.slice(i, (i += num)));
  }

  return arr.join(" ");
}

console.log(splitInParts("supercalifragilisticexpialidocious", 3));
console.log(splitInParts("HelloKata", 1));
console.log(splitInParts("HelloKata", 9));
