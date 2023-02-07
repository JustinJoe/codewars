/*  
Given a string and an array of integers representing indices, capitalize all letters at 
the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.
*/
// P: Takes in a string and an array of numbers
// R: Returns a string
// E:
// indexCapitalisation("abcdef",[1,2,5]) -->'aBCdeF';
// indexCapitalisation("abcdef",[1,2,5,100]) -->'aBCdeF';
// indexCapitalisation("codewars",[1,3,5,50]) -->'cOdEwArs';
// indexCapitalisation("abracadabra",[2,6,9,10]) -->'abRacaDabRA';
// indexCapitalisation("codewarriors",[5]) -->'codewArriors';
// indexCapitalisation("indexinglessons",[0]) -->'Indexinglessons';
// P:
function indexCapitalisation(string, arr) {
  string = [...string];
  for (let i = 0; i < arr.length; i++) {
    if (string[arr[i]]) {
      string[arr[i]] = string[arr[i]].toUpperCase();
    }
  }
  return string.join("");
}

console.log(indexCapitalisation("abcdef", [1, 2, 5]));
console.log(indexCapitalisation("abcdef", [1, 2, 5, 100]));
console.log(indexCapitalisation("codewars", [1, 3, 5, 50]));
console.log(indexCapitalisation("abracadabra", [2, 6, 9, 10]));
console.log(indexCapitalisation("codewarriors", [5]));
console.log(indexCapitalisation("indexinglessons", [0]));
