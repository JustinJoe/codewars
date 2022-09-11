/* 
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. 
Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return 
Nothing (None).

Example:
*/

// P: Takes in two arrays of strings
// R: Returns an integer
// E:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz",
// "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// P:

function maxLengthDifference(arr1, arr2) {
  // find longest element in arr1 and arr2
  // find the absolute difference between arr1 and arr2

  let arr1Min = Math.min(...arr1.map((x) => x.length));
  let arr2Min = Math.min(...arr2.map((x) => x.length));
  let arr1Max = Math.max(...arr1.map((x) => x.length));
  let arr2Max = Math.max(...arr2.map((x) => x.length));

  if (arr1.length == 0 || arr2.length == 0) return -1;
  return Math.max(arr1Max - arr2Min, arr2Max - arr1Min);
}

console.log(
  maxLengthDifference(
    [
      "hoqq",
      "bbllkw",
      "oox",
      "ejjuyyy",
      "plmiis",
      "xxxzgpsssa",
      "xxwwkktt",
      "znnnnfqknaz",
      "qqquuhii",
      "dvvvwz",
    ],
    ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
  )
);
