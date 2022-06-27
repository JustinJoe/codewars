/* 
Check to see if a string has the same amount of 'x's and 'o's. The method 
must return a boolean and be case insensitive. The string can contain any char.

*/

//P: Takes in a string as a parameter
//R: Returns a boolean - true if the number of Xs and Os are equal,
//otherwise false
//E:
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
//P: 
function equalChars(string) {
    //change string to lowercase
    //declare variables for X and O set to zero
    //loop through and count respective char
    //check if the counts are equal
    
    // let countX = 0;
    // let countO = 0;
    
    // let stringArr =string.toLowerCase().split('');
    
    // for (let i = 0; i < stringArr.length; i++) {
    //     if (stringArr[i] === 'x') {
    //         countX++;
    //     } else if (stringArr[i] === 'o') {
    //         countO++;
    //     }
    // }

    // return countO === countX;

    //Refactor
    let stringArr =string.toLowerCase().split('');
    
    return stringArr.filter(element => element === 'x').length 
            === stringArr.filter(element => element === 'o').length;
}

console.log(equalChars('zpzpzpp'), true)
console.log(equalChars('xooxx'), false)
console.log(equalChars('ooxx'), true)
console.log(equalChars('ooxXm'), true)
console.log(equalChars("zzoo"), false)