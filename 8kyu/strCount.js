/* 
Create a function that accepts 2 string arguments and returns an integer of the 
count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.
*/

//P: Takes in a two strings
//R: Returns the count of occurences of the second argument in the first argument
//E:
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
//P:

function strCount(str, letter) {
    //Split str
    //Loop through str and count letter in str

    return str.split('').filter(char => char === letter).length;
}

console.log(strCount("Hello", "o"))
console.log(strCount("Hello", "l"))
console.log(strCount("", "z"))