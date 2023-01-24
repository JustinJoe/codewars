/* 
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
*/
// P: Takes in two strings
// R: Returns an integer
// E:
// sameCase('C', 'B') --> 1;
// sameCase('b', 'a') --> 1;
// sameCase('d', 'd') --> 1;
// sameCase('A', 's') --> 0;
// sameCase('c', 'B') --> 0;
// sameCase('b', 'Z') --> 0;
// sameCase('\t', 'Z') --> -1;
// sameCase('H', ':') --> -1;
// P:
function sameCase(str1, str2) {
  return !/[a-zA-Z]/.test(str1) || !/[a-zA-Z]/.test(str2)
    ? -1
    : (str1.toUpperCase() === str1 && str2.toUpperCase() === str2) ||
      (str1.toLowerCase() === str1 && str2.toLowerCase() === str2)
    ? 1
    : 0;
}

console.log(sameCase("C", "B"));
console.log(sameCase("b", "a"));
console.log(sameCase("d", "d"));
console.log(sameCase("A", "s"));
console.log(sameCase("c", "B"));
console.log(sameCase("b", "Z"));
console.log(sameCase("\t", "Z"));
console.log(sameCase("H", ":"));
