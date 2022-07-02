/* 
Complete the method that takes a boolean value and return a 
"Yes" string for true, or a "No" string for false.
*/

//P: Takes in a boolean as the parameter
//R: Returns 'Yes' for true, 'No' for false
//E: 
// convertBoolToWord(true)   //Yes
// convertBoolToWord(false)  //No  
//P:
function convertBoolToWord(bool) {
    return bool ? 'Yes' : 'No';
}

console.log(convertBoolToWord(true))
console.log(convertBoolToWord(false))