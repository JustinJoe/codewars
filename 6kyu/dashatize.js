/* 
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, 
but do not begin or end the string with a dash mark. If n is negative, then the negative 
sign should be removed.

If n is not an integer, return the string "NaN".
*/
// P: Takes in an integer
// R: Returns a string or NaN
// E:
// dashatize(274) --> "2-7-4";
// dashatize(5311) --> "5-3-1-1";
// dashatize(86320) --> "86-3-20";
// dashatize(974302) --> "9-7-4-3-02";
// dashatize(NaN) --> "NaN";
// dashatize(0) --> "0";
// dashatize(-1) --> "1";
// dashatize(-28369) --> "28-3-6-9";
// P:
function dashatize(num) {
  num = Math.abs(num);

  let newNum = [];
  if (isNaN(num) || String(num).length < 2) return String(num);
  else {
    num = [...String(num)];
    for (let i = 0; i < num.length; i++) {
      let cur = num[i];
      if (i === 0 && cur % 2 !== 0) {
        newNum.push(`${cur}`);
        newNum.push(`-`);
      } else if (i > 0 && i < num.length - 1 && cur % 2 !== 0) {
        if (newNum[newNum.length - 1] === "-") newNum.push(`${cur}`);
        else {
          newNum.push(`-${cur}`);
        }
        newNum.push(`-`);
      } else if (i === num.length - 1 && cur % 2 !== 0) {
        if (newNum[newNum.length - 1] === "-") newNum.push(`${cur}`);
        else newNum.push(`-${cur}`);
      } else newNum.push(cur);
    }
  }
  return newNum.join("");
}

console.log(dashatize(274));
console.log(dashatize(5311));
console.log(dashatize(86320));
console.log(dashatize(974302));
console.log(dashatize(NaN));
console.log(dashatize(0));
console.log(dashatize(-1));
console.log(dashatize(-28369));
