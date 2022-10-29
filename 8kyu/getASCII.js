/* 
Get ASCII value of a character.

For the ASCII table you can refer to http://www.asciitable.com/
*/
// P: Takes in a string
// R: Returns an integer
// E:
// getASCII('A') --> 65
// getASCII(' ') --> 32
// getASCII('!') --> 33
// P:
function getASCII(char) {
  return char.charCodeAt(0);
}

console.log(getASCII("A"));
console.log(getASCII(" "));
console.log(getASCII("!"));
