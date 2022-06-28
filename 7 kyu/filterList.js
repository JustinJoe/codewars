/* 
In this kata you will create a function that takes a list of non-negative 
integers and strings and returns a new list with the strings filtered out.
*/

//P: Takes in an array made up of strings and integers as a parameter
//R: Returns a list of strings filtered out
//E: 
// filterList([1,2,'a','b']) --> [1, 2]
// filterList([1,'a','b',0,15]) --> [1, 0, 15]
// filterList([1,2,'aasf','1','123',123]) --> [1, 2, 123]
//P: 
function filterList(list) {
    //loop through array
    //check for integers
    //return array with integers
    return list.filter(element => typeof element === 'number')
}

console.log(filterList([1,2,'a','b']), [1, 2])
console.log(filterList([1,'a','b',0,15]), [1, 0, 15])
console.log(filterList([1,2,'aasf','1','123',123]), [1, 2, 123])