/* 
An isogram is a word that has no repeating letters, consecutive or 
non-consecutive. Implement a function that determines whether a string 
that contains only letters is an isogram. Assume the empty string is 
an isogram. Ignore letter case.

*/

//P: Parameter is a string
//R: Returns true if it is an isogram; false otherwise
//E:
// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
//P:
function isIsogram(str) {
  //convert str to lowerCase
  //split str into an array
  //loop through
  //check the last index each element can be found

  str = str.toLowerCase();
  let strArr = str.split("");

  return !strArr.some((char, i, arr) => arr.lastIndexOf(char) !== i);
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
