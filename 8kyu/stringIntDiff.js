/* 
Given a mixed array of number and string representations of integers, add up 
the non-string integers and subtract this from the total of the string integers.

Return as a number.
*/
// P: Takes in an array
// R: Returns an integer
// E:
// stringIntDiff([9, 3, '7', '3']) --> 2
// stringIntDiff(['5', '0', 9, 3, 2, 1, '9', 6, 7]) --> 14
// stringIntDiff(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) --> 13
// P:
function stringIntDiff(arr) {
  let stringLength = arr
    .filter((str) => typeof str === "string")
    .reduce((acc, cur) => +acc + +cur, 0);
  let integerLength = arr
    .filter((num) => typeof num === "number")
    .reduce((acc, cur) => +acc + +cur, 0);

  return integerLength - stringLength;
}

console.log(stringIntDiff([9, 3, "7", "3"]));
console.log(stringIntDiff(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(stringIntDiff(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
