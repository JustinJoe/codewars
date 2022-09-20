/* 
Your objective is simple: In fewer than 40 characters (and with a few restrictions), write a 
function that returns the square of a number passed in. This number may be anywhere between 
-32,768 and 32,768, and may include decimals (you will however absolutely not have to worry 
about a square being >= 2^53).

In the case that a number is a decimal, after squaring it, round it to the nearest whole 
number. The Math class, along with .toFixed() is tested for (you can't pass with it), but 
not disabled, so feel free to use it if that makes it easier before you start minifying your 
solution. Similarly, the * and the + operators are not allowed, but not disabled in the 
hopes that this may make it slightly easier for some warriors. External libraries and 
eval() are disabled.

Note: The <40 character limit includes the function itself. Luckily, the function's name 
is sq. The reference solution is 36 characters. I have no doubt some of you will beat that 
handily. Have fun and good luck! :)
*/
// P: Takes in an integer
// R: Returns an integer
// E:
// sq(3.0) => 9
// sq(14) => 196
// sq(14.4) => 207
// sq(-999.999) => 999998
// console.log(sq(4.4)) --> 19
// console.log(sq(-4.44)); --> 20
// P:
sq = (x) => parseInt(x / (1 / x) - -0.5);

console.log(sq(3.0));
console.log(sq(14));
console.log(sq(4.4));
console.log(sq(-4.44));
console.log(sq(14.4));
console.log(sq(-999.999));
