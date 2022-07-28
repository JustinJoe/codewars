/* 
Given an integer as input, can you round it to the next (meaning, "higher") multiple 
of 5?
*/

//P: Takes in an integer
//R: Returns an integer
//E:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
//P:

function roundTo5Multiple(num) {
    return Math.ceil(num / 5) * 5;
}

console.log(roundTo5Multiple(0))
console.log(roundTo5Multiple(2))
console.log(roundTo5Multiple(3))
console.log(roundTo5Multiple(12))
console.log(roundTo5Multiple(21))
console.log(roundTo5Multiple(30))
console.log(roundTo5Multiple(-2))
console.log(roundTo5Multiple(-5))