/* 
You will be given a number and you will need to return it as a string in Expanded Form. 

NOTE: All numbers will be whole numbers greater than 0.
*/

// P: Takes in an integer
// R: Returns a string
// E:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// expandedForm(4982342) // Should return '4000000 + 900000 + 80000 + 2000 + 300 + 40 + 2'
// P:

function expandedForm(number) {
  // convert number to string
  // split string into digits
  //   check for last digit
  // loop through array
  // pad every digit save the last with appropriate 0s

  number = number.toString().split("");

  return number
    .map((num, i) => {
      if (i === number[number.length - 1]) {
        return num;
      } else {
        return num.padEnd(number.length - i, "0");
      }
    })
    .filter((num) => !num.startsWith("0"))
    .join(" + ");
}

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));
console.log(expandedForm(4982342));
