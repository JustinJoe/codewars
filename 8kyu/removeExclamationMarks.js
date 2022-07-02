/* 
Write function RemoveExclamationMarks which removes all exclamation 
marks from a given string.
*/

//P: Takes in a string, str
//R: Returns a string with no exclamation mark
//E: removeExclamationMarks('Hello World!') //Hello World
//P:

function removeExclamationMarks(str) {
    //Split str
    //Filter out any element equal to !
    //Join elements in array and return

    return str.split('')
              .filter(element => element !== '!')
              .join('')
}

console.log(removeExclamationMarks('Hello Wor!ld!'))
console.log(removeExclamationMarks('Hello World!'))