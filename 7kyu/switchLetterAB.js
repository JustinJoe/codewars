/* 
Given a string made up of letters a, b, and/or c, switch the position of letters a and b 
(change a to b and vice versa). Leave any incidence of c untouched.

Example:

*/
// P: Takes in a string
// R: Returns a string
// E:
// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'
// P:
function switchLetterAB(string) {
  // replace a with b and vice versa

  return [...string]
    .map((letter) => {
      return letter === "a" ? "b" : letter === "b" ? "a" : letter;
    })
    .join("");
}

console.log(switchLetterAB("acb"));
console.log(switchLetterAB("aabacbaa"));
