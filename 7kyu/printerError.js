/* 
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to 
use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" 
control string would be aaabbbbhaijjjm meaning that the printer used three times color a, 
four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control 
string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate 
of the printer as a string representing a rational whose numerator is the number of errors 
and the denominator the length of the control string. Don't reduce this fraction to a 
simpler expression.

The string has a length greater or equal to one and contains only letters from a to z.
*/

//P: Takes in a string
//R: Returns a string, "numerator/denominator"
//E:
// s = "aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s = "aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

// s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
// printer_error(s) => "3/56"

//P:

function printerError(s) {
  //get length of s - denominator
  //split s into an array
  //get number of char outside of a to m - numerator

  let denominator = s.length;
  let numerator = 0;

  for (let i = 0; i < denominator; i++) {
    if (s.charCodeAt(i) > 109) {
      numerator++;
    }
  }

  return `${numerator}/${denominator}`;
}

console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
