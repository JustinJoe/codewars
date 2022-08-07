/* 
Take an array and remove every second element from the array. Always keep the first element and start 
removing with the next element.

None of the arrays will be empty, so you don't have to worry about that!
*/

//P: Takes in an array
//R: Returns an array
//E:
// removeSecondElements(["Keep", "Remove", "Keep", "Remove", "Keep", ...]) --> ["Keep", "Keep", "Keep", ...]
// removeSecondElements(['Hello', 'Goodbye', 'Hello Again']) --> ['Hello', 'Hello Again']
// removeSecondElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) --> [1, 3, 5, 7, 9]
// removeSecondElements([[1, 2]]) --> [[1, 2]]
// removeSecondElements([['Goodbye'], {'Great': 'Job'}]) --> [['Goodbye']]
//P:

function removeSecondElements(arr) {
    //filter for index for second elemets
    return arr.filter((element, i) => i % 2 === 0);
}

console.log(removeSecondElements(["Keep", "Remove", "Keep", "Remove", "Keep"]))
console.log(removeSecondElements(['Hello', 'Goodbye', 'Hello Again']))
console.log(removeSecondElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(removeSecondElements([[1, 2]]))
console.log(removeSecondElements([['Goodbye'], {'Great': 'Job'}]))