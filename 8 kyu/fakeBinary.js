/* 
Given a string of digits, you should replace any digit below 5 with '0' and any 
digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

//P: Takes in a string of digits
//R: Returns a string of digits 0 and 1
//E: fakeBin('45385593107843568') --> '01011110001100111'
//fakeBin('509321967506747') --> '101000111101101'
//fakeBin('366058562030849490134388085') --> '011011110000101010000011011'
//P: 

function fakeBin(str) {
    return str.split('').map(num => num < 5 ? 0 : 1).join('')
}

console.log(fakeBin('45385593107843568'))
console.log(fakeBin('509321967506747'))
console.log(fakeBin('366058562030849490134388085'))