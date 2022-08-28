/* 
This is version 2 of my 'Write Number in Exanded Form' Kata.

You will be given a number and you will need to return it as a string in expanded form :

expanded form illustration

For example:

*/

// P: Takes in a number
// R: Returns a string
// E:
// expandedformDecimal(807.304); // Should return "800 + 7 + 3/10 + 4/1000"
// expandedformDecimal(1.24); // should return "1 + 2/10 + 4/100"
// expandedformDecimal(7.304); // should return "7 + 3/10 + 4/1000"
// expandedformDecimal(0.04); // should return "4/100"
// P:

function expandedformDecimal(number) {
  // Split into whole and fraction
  // expand whole and decimals
  // concat whole and decimal
  // join array with " + "

  number = number.toString().split(".");
  let whole = number[0];
  let decimal = number[1];

  whole = whole
    .split("")
    .map((num, i) => {
      if (i === whole.length - 1) {
        return num;
      } else {
        return num.padEnd(whole.length - i, "0");
      }
    })
    .filter((num) => !num.startsWith("0"));

  decimal = decimal
    .split("")
    .map((num, i) => {
      let den = "1".padEnd(i + 2, "0");
      return `${num}/${den}`;
    })
    .filter((num) => !num.startsWith("0"));
  return whole.concat(decimal).join(" + ");
}

console.log(expandedformDecimal(807.304));
console.log(expandedformDecimal(1.24));
console.log(expandedformDecimal(7.304));
console.log(expandedformDecimal(0.04));
