/* 
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:


Attention: If the number has leading zeros the amount of digits should be considered.

*/
// P: Takes in a string
// R: Returns a string
// E:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// P:
function increaseString(string) {
  // split string
  // filter digits
  // convert to integer + 1
  // digitString !== digitInteger, padStart digitInteger with 0

  let digitString = [...string].filter((x) => x.match(/\d+/)).join("");
  let digitInteger = parseInt(digitString) + 1 || 1;

  if (digitInteger.length !== digitString.length) {
    digitInteger = String(digitInteger).padStart(digitString.length, "0");
  }

  return [...string].filter((x) => x.match(/\D+/)).join("") + digitInteger;
}

console.log(increaseString("foo"));
console.log(increaseString("foobar23"));
console.log(increaseString("foobar000"));
console.log(increaseString("foo0042"));
console.log(increaseString("foo9"));
console.log(increaseString("foo099"));
