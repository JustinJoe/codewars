/* 
Count the number of divisors of a positive integer n.
Random tests go up to n = 500000.
*/

//P: Takes in num, a number
//R: Returns count, a number
//E:
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
//P:

function countDivisors(num) {
    //Declare count variable
    //Loop from 1 to num to find divisors
    //Return count
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) count++;
    }
    return count;
}

console.log(countDivisors(4))
console.log(countDivisors(5))
console.log(countDivisors(12))
console.log(countDivisors(30))