/* 
The goal of this exercise is to convert a string to a new string where each character in the new 
string is "(" if that character appears only once in the original string, or ")" if that character 
appears more than once in the original string. Ignore capitalization when determining if a 
character is a duplicate.
*/

// P: takes in a string
// R: returns a string made of "(" and ")"
// E:
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// P:

function duplicateEncoder(word) {
  // convert word to lowercase
  // split word into char
  // through and check if each char is equal to the another char with the indexOf

  let encoded = "";

  word = word.toLowerCase().split("");

  word.map((ele) => {
    if (word.indexOf(ele) === word.lastIndexOf(ele)) {
      encoded += "(";
    } else encoded += ")";
  });

  return encoded;
}

console.log(duplicateEncoder("din"));
console.log(duplicateEncoder("recede"));
console.log(duplicateEncoder("Success"));
console.log(duplicateEncoder("(( @"));
