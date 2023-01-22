/* 
Given a string, turn each character into its ASCII character code and join them together 
to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 
'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/
// P: Takes in a string
// R: Returns a number
// E:
// charCodeCalc('abcdef') --> 6;
// charCodeCalc('ifkhchlhfd') --> 6;
// charCodeCalc('aaaaaddddr') --> 30;
// charCodeCalc('jfmgklf8hglbe') --> 6;
// charCodeCalc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') --> 96;
// P:
function charCodeCalc(str) {
  str = str.split("");

  let total1 = str.map((ele) => ele.charCodeAt()).join("");
  let total2 = total1.replaceAll("7", "1");

  return (
    [...total1].reduce((acc, cur) => +acc + +cur, 0) -
    [...total2].reduce((acc, cur) => +acc + +cur, 0)
  );
}

console.log(charCodeCalc("abcdef"));
console.log(charCodeCalc("ifkhchlhfd"));
console.log(charCodeCalc("aaaaaddddr"));
console.log(charCodeCalc("jfmgklf8hglbe"));
console.log(
  charCodeCalc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
);
