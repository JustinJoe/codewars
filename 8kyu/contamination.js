/* 
An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.
*/
// P: Takes in two strings
// R: Returns a string
// E:
// contamination("abc","z") --> "zzz"
// contamination("","z") --> ""
// contamination("abc","") --> ""
// contamination("_3ebzgh4","&") --> "&&&&&&&&"
// contamination("//case"," ") --> "      "
// P:
function contamination(text, char) {
    return char.repeat(text.length)
}

console.log(contamination("abc","z"))
console.log(contamination("","z"))
console.log(contamination("abc",""))
console.log(contamination("_3ebzgh4","&"))
console.log(contamination("//case"," "))