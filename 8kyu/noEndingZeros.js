/* 
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

Zero alone is fine, don't worry about it. Poor guy anyway
*/
// P: Takes in an integer
// R: Returns an integer
// E:
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// 0 --> 0
// P:
function noEndingZeros(number) {
  //    if endsWith 0 split last number
  //    repeat till all 0s are stripped away

  number = String(number);

  if (number.length == 1) return parseInt(number);
  if (number.endsWith(0)) {
    return noEndingZeros(
      parseInt(
        number
          .split("")
          .slice(0, number.length - 1)
          .join("")
      )
    );
  } else return parseInt(number);
}

console.log(noEndingZeros(1450));
console.log(noEndingZeros(960000));
console.log(noEndingZeros(1050));
console.log(noEndingZeros(-1050));
console.log(noEndingZeros(0));
