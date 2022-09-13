/* 
There is an array of strings. All strings contains similar letters except one. Try to find it!

Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. 
E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.
*/

// P: Takes in an array of strings
// R: Returns a string
// E:
// findUniqueString(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]) === "BbBb";
// findUniqueString(["abc", "acb", "bac", "foo", "bca", "cab", "cba"]) === "foo";
// P:
const unique = (str, i, arr) => arr.indexOf(str) === arr.lastIndexOf(str);
const getUnique = (str) => [...new Set([...str.toLowerCase()].sort())].join("");
const findUniqueString = (arr) => arr[arr.map(getUnique).findIndex(unique)];

console.log(
  findUniqueString(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"])
);
console.log(
  findUniqueString(["abc", "acb", "bac", "foo", "bca", "cab", "cba"])
);
