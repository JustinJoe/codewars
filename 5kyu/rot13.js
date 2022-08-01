/* 
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters 
after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are 
numbers or special characters included in the string, they should be returned as they are. Only 
letters from the latin/english alphabet should be shifted, like in the original Rot13 
"implementation".
*/

//P: Takes in a string
//R: Returns a string ciphered with Rot13
//E:
// "test" --> "grfg"
// "heLlo" --> "urYyb"
// "Justin" --> "Whfgva"
//P:

function rot13Cipher(string) {
    //Split string
    //Check for each ASCII code
    //Add or subtract 13 and return ASCII value
    //Join array
    
    return string.split('').map((char, i) => {
        if (string.charCodeAt(i) >= 78 && string.charCodeAt(i) <= 90 ||
        string.charCodeAt(i) >= 110 && string.charCodeAt(i) <= 122 ) {
            return String.fromCharCode(string.charCodeAt(i) - 13);
        } else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 77 ||
            string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 109 ) {
            return String.fromCharCode(string.charCodeAt(i) + 13);
        } else {
            return char;
        } 
    }).join('');    
}


console.log(rot13Cipher('test'))
console.log(rot13Cipher('heLlo'))
console.log(rot13Cipher('Justin'))