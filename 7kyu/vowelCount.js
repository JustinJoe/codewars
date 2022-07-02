/* 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

//P: Takes in a string as the parameter
//R: Returns a number (count of vowels in the given string)
//E: getCount("abracadabra") --> 5
//P:
function getCount(str){
    //split string into array
    //declare count = 0;
    //loop through array
    //check if any element matches a, e, i, o, u
    //add to the count whenever there's a match
    //return the count
    // let count = 0;
    // let strArr = str.split('')
    // for (let i = 0; i < strArr.length; i++){
    //     if (strArr[i] === 'a'
    //         || strArr[i] === 'e'
    //         || strArr[i] === 'i'
    //         || strArr[i] === 'o'
    //         || strArr[i] === 'u'
    //         )
    //         count++
    // }
    // return count;
    //Refactored solution
    return str.split('').filter(char => 'aeiou'.includes(char)).length
}

console.log(getCount("abracadabra"))
console.log(getCount("gtyhw"))
console.log(getCount("get"))