/* 
Given a mixed array of number and string representations of integers, add up the 
non-string integers and subtract this from the total of the string integers.

Return as a number.
*/
// P: Takes in an array
// R: Returns an integer
// E:
// divideAndConquer([9, 3, '7', '3']) --> 2;
// divideAndConquer(['5', '0', 9, 3, 2, 1, '9', 6, 7]) --> 14;
// divideAndConquer(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) --> 13;
// P:
function divideAndConquer(arr) {
  let nonString = arr
    .filter((num) => {
      if (typeof num !== "string") return num;
    })
    .reduce((acc, cur) => +acc + +cur, 0);

  let string = arr
    .filter((num) => {
      if (typeof num === "string") return num;
    })
    .reduce((acc, cur) => +acc + +cur, 0);

  return nonString - string;
}

console.log(divideAndConquer([9, 3, "7", "3"]));
console.log(divideAndConquer(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(divideAndConquer(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
