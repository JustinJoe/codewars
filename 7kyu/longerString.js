/* 
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, 
the longest possible, containing distinct letters - each taken only once - coming from s1 
or s2.

*/

// P: Takes in two strings, s1 and s2
// R: Returns a string
// E
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longerString(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// a = "aretheyhere"
// b = "yestheyarehere"
// longerString(a, b) -> "aehrsty"

// a = "loopingisfunbutdangerous"
// b = "lessdangerousthancoding"
// longerString(a, b) -> "abcdefghilnoprstu"

// a = "inmanylanguages"
// b = "theresapairoffunctions"
// longest(a, b) -> "acefghilmnoprstuy"

// P:
function longerString(s1, s2) {
  //join the s1 and s2
  //sort array
  //if element is repeated remove
  //join array

  let str = s1 + s2;

  return Array.from(new Set(str.split("").sort())).join("");
}

console.log(longerString("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(
  longerString("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")
);
console.log(longerString("aretheyhere", "yestheyarehere"));
console.log(
  longerString("loopingisfunbutdangerous", "lessdangerousthancoding")
);
console.log(longerString("inmanylanguages", "theresapairoffunctions"));
