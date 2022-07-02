/* 
Complete the function that accepts a string parameter, and reverses each word in 
the string. All spaces in the string should be retained.
*/

//P: Takes in a string of words 
//R: Returns the each word in the string reversed
//E: 
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
//P:

function reverseWords(str) {
    //Split str into words
    //Split into letters
    //Reverse 

    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

console.log(reverseWords("This is an example!"))
console.log(reverseWords("double  spaces"))