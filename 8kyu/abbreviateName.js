/* 
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:


*/

// P: Takes in a string made up of two words seperated by a space
//R: Returns the first letter of each word, capitalised, separated by a dot (.)
//E:
// Sam Harris => S.H
// patrick feeney => P.F
//P:
function abbreviateName(name){
    //Split name
    //Get first letter of each name from array
    //Join them with a dot (.)
    //Capitalise it
    return name.split(' ').map(char => char[0]).join('.').toUpperCase()
}

console.log(abbreviateName('Sam Harris'))
console.log(abbreviateName('patrick feeney'))