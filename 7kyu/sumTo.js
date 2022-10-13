/* 
Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. 
Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good 
long time, while he teaching arithmetic to his mates, assigned him the problem of adding up 
all the whole numbers from 1 through a given number n.

Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; 
so, he can astonish his teacher and rescue his recreation interval.

Here's, an example:

sumTo(n=100) // returns 5050 
It's your duty to verify that n is a valid positive integer number. If not, please, 
return false (None for Python, null for C#, 0 for COBOL).
*/
// P: Takes in an integer
// R: Returns an integer or a boolean
// E:
// sumTo(100) --> 5050
// sumTo(300) --> 45150
// sumTo(50000) --> 1250025000
// sumTo('n') --> false, "n must be a number"
// sumTo() --> false, "n must be a value"
// sumTo(3.14) --> false, "n must be an integer"
// sumTo(0) --> false, "a value of n greater than 0 is required"
// sumTo(-10) --> false, "a positive value of n is required"
// P:
function sumTo(num) {
  // check if num is an integer
  // num >= 1
  // sum from 1 to num

  return Number.isInteger(num) && num >= 1 ? (num * (num + 1)) / 2 : false;
}

console.log(sumTo(100));
console.log(sumTo(300));
console.log(sumTo(50000));
console.log(sumTo("n"));
console.log(sumTo());
console.log(sumTo(3.14));
console.log(sumTo(0));
console.log(sumTo(-10));
