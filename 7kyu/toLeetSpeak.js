/* 
Write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet
Consider only uppercase letters (no lowercase letters, no numbers) and spaces.
In this kata we use a simple LeetSpeak dialect. Use this alphabet:

{
  A : '@',
  B : '8',
  C : '(',
  D : 'D',
  E : '3',
  F : 'F',
  G : '6',
  H : '#',
  I : '!',
  J : 'J',
  K : 'K',
  L : '1',
  M : 'M',
  N : 'N',
  O : '0',
  P : 'P',
  Q : 'Q',
  R : 'R',
  S : '$',
  T : '7',
  U : 'U',
  V : 'V',
  W : 'W',
  X : 'X',
  Y : 'Y',
  Z : '2'
}
*/
// P: Takes in a string
// R: Returns a string
// E:
// toLeetSpeak("LEET") --> "1337";
// toLeetSpeak("CODEWARS") --> "(0D3W@R$";
// toLeetSpeak("HELLO WORLD") --> "#3110 W0R1D";
// toLeetSpeak("LOREM IPSUM DOLOR SIT AMET") --> "10R3M !P$UM D010R $!7 @M37";
// toLeetSpeak("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG") --> "7#3 QU!(K 8R0WN F0X JUMP$ 0V3R 7#3 1@2Y D06";
// P:
const alphabet = {
  A: "@",
  B: "8",
  C: "(",
  D: "D",
  E: "3",
  F: "F",
  G: "6",
  H: "#",
  I: "!",
  J: "J",
  K: "K",
  L: "1",
  M: "M",
  N: "N",
  O: "0",
  P: "P",
  Q: "Q",
  R: "R",
  S: "$",
  T: "7",
  U: "U",
  V: "V",
  W: "W",
  X: "X",
  Y: "Y",
  Z: "2",
};

function toLeetSpeak(str) {
  str = str.split("");

  return str
    .map((char, i) => {
      return alphabet[char] === undefined ? char : alphabet[char];
    })
    .join("");
}

console.log(toLeetSpeak("LEET"));
console.log(toLeetSpeak("CODEWARS"));
console.log(toLeetSpeak("HELLO WORLD"));
console.log(toLeetSpeak("LOREM IPSUM DOLOR SIT AMET"));
console.log(toLeetSpeak("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"));
