/* 
Complete the function, which calculates how much you need to tip based on the total amount 
of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is 
received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.
*/
// P: Takes in an integer and a string
// R: Returns an integer or string
// E:
// calculateTip(20, "Excellent") --> 4
// calculateTip(26.95, "good") --> 3
// P:
function calculateTip(amount, rating) {
  // lowercase rating string and check equality
  // Math.ceil amoount * rating

  return rating.toLowerCase() === "terrible"
    ? Math.ceil(amount * 0)
    : rating.toLowerCase() === "poor"
    ? Math.ceil(amount * 0.05)
    : rating.toLowerCase() === "good"
    ? Math.ceil(amount * 0.1)
    : rating.toLowerCase() === "great"
    ? Math.ceil(amount * 0.15)
    : rating.toLowerCase() === "excellent"
    ? Math.ceil(amount * 0.2)
    : "Rating not recognised";
}

console.log(calculateTip(20, "Excellent"));
console.log(calculateTip(26.95, "good"));
