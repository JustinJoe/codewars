/* 
My grandfather always predicted how old people would get, and right before he passed away he 
revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.
Some random tests might fail due to a bug in the JavaScript implementation. Simply 
resubmit if that happens to you.
*/

// P: Takes in 8 integers
// R: Returns an integer
// E:

// P:
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  // split each age and multiply digits
  // add result together
  // Math.sqrt(result) / 2

  let result =
    Math.pow(age1, 2) +
    Math.pow(age2, 2) +
    Math.pow(age3, 2) +
    Math.pow(age4, 2) +
    Math.pow(age5, 2) +
    Math.pow(age6, 2) +
    Math.pow(age7, 2) +
    Math.pow(age8, 2);

  return Math.floor(Math.sqrt(result) / 2);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));
