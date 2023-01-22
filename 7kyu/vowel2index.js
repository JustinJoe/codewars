/* 
Write a function

vowel2index(str)
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective 
positions within that string.
E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 
27n th32 w35rld'
vowel2index('') == ''
Your function should be case insensitive to the vowels.
*/
// P: Takes in a string
// R: Returns a string
// E:
// vowel2index('this is my string') --> 'th3s 6s my str15ng';
// vowel2index('Codewars is the best site in the world') -->
// 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld';
// vowel2index('Tomorrow is going to be raining') -->
// 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng';
// vowel2index('') --> '';
// P:
function vowel2index(str) {
  str = str.split("");
  return str
    .map((char, i) => {
      if (
        char === "a" ||
        char === "e" ||
        char === "o" ||
        char === "i" ||
        char === "u" ||
        char === "A" ||
        char === "E" ||
        char === "O" ||
        char === "I" ||
        char === "U"
      ) {
        return i + 1;
      } else return char;
    })
    .join("");
}

console.log(vowel2index("this is my string"));
console.log(vowel2index("Codewars is the best site in the world"));
console.log(vowel2index("Tomorrow is going to be raining"));
console.log(vowel2index(""));
