/* 
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

//P: Takes in two numbers
//R: Returns a boolean - true if one is even and the other number is odd; false
//E: 
// loveFunc(0, 0) --> false
// loveFunc(1, 4) --> true
// loveFunc(1, 0) --> true
//P:

function loveFunc(flower1, flower2){
    //check if numbers are even or odd
    //if one is odd and the other even, return true
    //else return false
    if((flower1 % 2 === 0 && flower2 % 2 !== 0)
     ||(flower1 % 2 !== 0 && flower2 % 2 === 0)
        ) {
            return true
        }
    return false;
    //Alternate Solution
    //return flower1 % 2 !== flower2 % 2;
}

console.log(loveFunc(0, 0))
console.log(loveFunc(1, 0))
console.log(loveFunc(1, 4))