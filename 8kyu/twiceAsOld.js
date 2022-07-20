/* 
Your function takes two arguments:
current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son 
(or in how many years he will be twice as old).
*/

//P: Takes in two integers as parameters
//R: Returns an integer - number of years
//E:
// twiceAsOld(55, 30) --> 5
// twiceAsOld(42, 21) --> 0
// twiceAsOld(36, 7) --> 22
// twiceAsOld(22, 1) --> 20
// twiceAsOld(29, 0) --> 29
//P:

function twiceAsOld(dadsYears, sonsYears) {
    //Find absolute difference twice dad and son's age

    return Math.abs(dadsYears - 2 * sonsYears);
}

console.log(twiceAsOld(55, 30))
console.log(twiceAsOld(42, 21))
console.log(twiceAsOld(36, 7))
console.log(twiceAsOld(22, 1))
console.log(twiceAsOld(29, 0))