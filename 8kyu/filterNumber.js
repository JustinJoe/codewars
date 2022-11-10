/* 
Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve 
the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return 
all the numbers in that string in the order they occur.
*/
// P: Takes in a string
// R: Returns a number
// E:
// filterNumber("123") --> 123
// filterNumber("a1b2c3") --> 123
// filterNumber("aa1bb2cc3dd") --> 123
// P: 
function filterNumber(value) {
    return +(value.split('').filter(char => char.match(/\d/)).join(""));
}

console.log(filterNumber("123"))
console.log(filterNumber("a1b2c3"))
console.log(filterNumber("aa1bb2cc3dd"))