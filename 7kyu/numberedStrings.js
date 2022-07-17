/* 
Your team is writing a fancy new text editor and you've been tasked with 
implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended 
by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in 
between.
*/

//P: Takes in an array of strings
//R: Returns an array of "numbered" strings
//E: 
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
//P:

function numberedStrings(arr) {
    //Loop through array
    //Cocantenate each element with a number, colon and space

    return arr.map((element, i) => `${i + 1}: ${element}`);
}

console.log(numberedStrings([]))
console.log(numberedStrings(["a", "b", "c"]))
