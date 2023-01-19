/* 
You'll be given a string, and have to return the sum of all characters as an int. The 
function should be able to handle all ASCII characters.
*/
// P: Takes in a string
// R: Returns an integer
// E:
// uniTotal("") --> 0;
// uniTotal("a") --> 97;
// uniTotal("b") --> 98;
// uniTotal("c") --> 99;
// uniTotal("d") --> 100;
// uniTotal("e") --> 101;
// uniTotal("aaa") --> 291;
// uniTotal("Mary Had A Little Lamb") --> 1873;
function uniTotal(string) {
  let total = 0;

  for (let i = 0; i < string.length; i++) {
    total += string.charCodeAt(i);
  }
  return total;
}

console.log(uniTotal(""));
console.log(uniTotal("a"));
console.log(uniTotal("b"));
console.log(uniTotal("c"));
console.log(uniTotal("d"));
console.log(uniTotal("e"));
console.log(uniTotal("aaa"));
console.log(uniTotal("Mary Had A Little Lamb"));
