/* 
Complete the solution so that it returns true if the first argument(string) passed in ends 
with the 2nd argument (also a string).
*/

//P: Takes in two strings, str and ending which describes the ending
//R: Returns true if ending matches the ending of str, otherwise false
//E: Examples:
// endsWith('abc', 'bc') // returns true
// endsWith('abc', 'd') // returns false
//P:

function strEndsWith(str, ending) {
    return str.endsWith(ending)
}

console.log(strEndsWith('abc', 'bc'))
console.log(strEndsWith('abc', 'd'))