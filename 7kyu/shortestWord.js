/* 
Simple, given a string of words, return the length of the 
shortest word(s).

String will never be empty and you do not need to account for 
different data types.
*/

//P: Takes in a string of words
//R: Returns a number, the length of the shortest word
//E: 
// shortestWord("bitcoin take over the world maybe who knows perhaps") --> 3
// shortestWord("turns out random test cases are easier than writing out basic ones") 
// --> 3
// shortestWord("Let's travel abroad shall we") --> 2
//P:

function shortestWord(str) {
    //Split into an array
    //check for length
    //return minimum

    return Math.min(...(str.split(' ').map(element => element.length)));
}

console.log(shortestWord("bitcoin take over the world maybe who knows perhaps"))
console.log(shortestWord
    ("turns out random test cases are easier than writing out basic ones"))
console.log(shortestWord("Let's travel abroad shall we"))