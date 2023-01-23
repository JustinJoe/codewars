/* 
A number is called Automorphic number if and only if its square ends in the same digits 
as the number itself.

Task
Given a number determine if it Automorphic or not .

The number passed to the function is positive
*/
// P: Takes in an integer
// R: Returns a string
// E:
// automorphic(1) --> "Automorphic";
// automorphic(3) --> "Not!!";
// automorphic(6) --> "Automorphic";
// automorphic(9) --> "Not!!";
// automorphic(25) --> "Automorphic";
// automorphic(53) --> "Not!!";
// automorphic(76) --> "Automorphic";
// automorphic(95) --> "Not!!";
// automorphic(625) --> "Automorphic";
// automorphic(225) --> "Not!!";
// P:
function automorphic(num) {
  return String(Math.pow(num, 2)).endsWith(`${num}`) ? "Automorphic" : "Not!!";
}

console.log(automorphic(1));
console.log(automorphic(3));
console.log(automorphic(6));
console.log(automorphic(9));
console.log(automorphic(25));
console.log(automorphic(53));
console.log(automorphic(76));
console.log(automorphic(95));
console.log(automorphic(625));
console.log(automorphic(225));
