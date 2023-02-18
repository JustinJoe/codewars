/* 
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a 
length of 2. Given a lowercase string that has alphabetic characters only (both vowels 
and consonants) and no spaces, return the length of the longest vowel substring. Vowels 
are any of aeiou.
*/
// P: Takes in a string
// R: Returns an integer
// E:
// longestVowelChain("codewarriors") --> 2;
// longestVowelChain("suoidea") --> 3;
// longestVowelChain("ultrarevolutionariees") --> 3;
// longestVowelChain("strengthlessnesses") --> 1;
// longestVowelChain("cuboideonavicuare") --> 2;
// longestVowelChain("chrononhotonthuooaos") --> 5;
// longestVowelChain("iiihoovaeaaaoougjyaw") --> 8;
// P:
function longestVowelChain(s) {
  let cur = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if ("aeiou".includes(s[i])) {
      cur++;
      if (cur > max) max = cur;
    } else cur = 0;
  }
  return max;
}

console.log(longestVowelChain("codewarriors"));
console.log(longestVowelChain("suoidea"));
console.log(longestVowelChain("ultrarevolutionariees"));
console.log(longestVowelChain("strengthlessnesses"));
console.log(longestVowelChain("cuboideonavicuare"));
console.log(longestVowelChain("chrononhotonthuooaos"));
console.log(longestVowelChain("iiihoovaeaaaoougjyaw"));
