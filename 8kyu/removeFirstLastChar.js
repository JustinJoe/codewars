/* 
Remove First and Last Character

It's pretty straightforward. Your goal is to create a function 
that removes the first and last characters of a string. You're 
given one parameter, the original string. You don't have to worry 
with strings with less than two characters.
*/
//P: Takes in a string as a parameter. String will never have less than two characters. What about white space?
//R: Returns a string without the first and last character
//E: 
// (removeChar('eloquent'), 'loquen');
// (removeChar('country'), 'ountr');
// (removeChar('person'), 'erso');
// (removeChar('place'), 'lac');
// (removeChar('ooopsss'), 'oopss');

function removeChar(str){
    //split the string into an array
    //pop and shift the last and first characters in the array
    //join the elements in the array
    //return the new string
    let newStr = str.split('')
    newStr.pop()
    newStr.shift()
    return newStr.join('')

    //Alternate Solution
    //return str.slice(1, -1)
}

console.log(removeChar('eloquent')) //'loquen';
console.log(removeChar('country')); //==>'ountr'
console.log(removeChar('person')); //==>'erso'
console.log(removeChar('place'));//==>'lac'
console.log(removeChar('ooopsss')); //==>'oopss'