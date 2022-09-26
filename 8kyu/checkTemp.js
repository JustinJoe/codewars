/* 
Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, 
else, return Help yourself to a honeycomb Yorkie for the glovebox.

Note: Input will either be a positive integer (or a string for untyped languages).
*/

// P: Takes in an integer
// R: Returns a string
// E:
// checkTemp("50") --> "It's hotter than the sun!!"
// checkTemp(4) --> "Help yourself to a honeycomb Yorkie for the glovebox."
// P:
function checkTemp(x) {
  // x^2 > 1000 --> "It's hotter than the sun!!"
  // else "Help yourself to a honeycomb Yorkie for the glovebox."

  return Math.pow(x, 2) > 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

console.log(checkTemp("50"));
console.log(checkTemp(4));
