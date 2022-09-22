/* 
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters 
and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string 
to lowercase.
For example:

*/
// P: Takes in a string
// R: Returns a string
// E:
// upperOrLowerCase("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// upperOrLowerCase("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// upperOrLowerCase("coDE") = "code". Upper == lowercase. Change all to lowercase.
// P:
function upperOrLowerCase(text) {
  // split text
  // count lowercase and uppercase letters
  // if uppercase > lowercase, convert text to uppercase
  // else convert text to lowercase

  let upper = 0;
  let lower = 0;

  text.split("").map((char) => {
    if (char === char.toUpperCase()) {
      upper++;
    } else lower++;
  });

  return upper > lower ? text.toUpperCase() : text.toLowerCase();
}

console.log(upperOrLowerCase("coDe"));
console.log(upperOrLowerCase("CODe"));
console.log(upperOrLowerCase("coDE"));
