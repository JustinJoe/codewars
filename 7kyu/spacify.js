/* 
Modify the spacify function so that it returns the given string with spaces 
inserted between each character.
*/
// P: Takes in a string
// R: Returns a string
// E:
// spacify('hello world') -->'h e l l o   w o r l d'
// spacify('12345') -->'1 2 3 4 5'
// P:
function spacify(str) {
    return str.split("").join(" ");
}

console.log(spacify('hello world'))
console.log(spacify('12345'))