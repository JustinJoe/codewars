/* 
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/

//P: Takes in a string of words
//R: Returns a string - one word
//E:
// isHighestScoringWord('man i need a taxi up to ubud') --> 'taxi'
// isHighestScoringWord('what time are we climbing up the volcano') --> 'volcano'
// isHighestScoringWord('take me to semynak') --> 'semynak'
// isHighestScoringWord('aa b') --> 'aa'
// isHighestScoringWord('b aa') --> 'b'
// isHighestScoringWord('bb d') --> 'bb'
// isHighestScoringWord('BB d') --> 'bb'
// isHighestScoringWord('d bb') --> 'd'
// isHighestScoringWord('aaa b') --> 'aaa'
//P:

function isHighestScoringWord(string) {
  //convert to lowercase
  //split string into words
  //get word score of each string
  //get max word score
  //return the first max score

  let str = string
    .toLowerCase()
    .split(" ")
    .map((char) =>
      [...char].reduce((acc, cur) => acc + cur.charCodeAt(0) - 96, 0)
    );

  return string.split(" ")[str.indexOf(Math.max(...str))];
}

// console.log(isHighestScoringWord("man"));
console.log(isHighestScoringWord("man i need a taxi up to ubud"));
console.log(isHighestScoringWord("what time are we climbing up the volcano"));
console.log(isHighestScoringWord("take me to semynak"));
console.log(isHighestScoringWord("aa b"));
console.log(isHighestScoringWord("b aa"));
console.log(isHighestScoringWord("bb d"));
console.log(isHighestScoringWord("BB d"));
console.log(isHighestScoringWord("d bb"));
console.log(isHighestScoringWord("aaa b"));
