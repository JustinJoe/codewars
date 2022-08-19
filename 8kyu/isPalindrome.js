/* 
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

//P: Takes in a string
//R: Returns a boolean
//E:
// isPalindrome("a") --> true;
// isPalindrome("aba") --> true;
// isPalindrome("Abba") --> true;
// isPalindrome("hello") --> false;
// isPalindrome("Bob") --> true;
// isPalindrome("Madam") --> true;
// isPalindrome("AbBa") --> true;
// isPalindrome("") --> true;
//P:

function isPalindrome(string) {
  //change to lowercase
  //create a reversed string
  //compare reversed string and string
  let reversedArr = string.toLowerCase().split("");
  let reversedString = [];

  for (let i = reversedArr.length - 1; i >= 0; i--) {
    reversedString.push(reversedArr[i]);
  }

  return reversedString.join("") === string.toLowerCase();
}

console.log(isPalindrome("a"));
console.log(isPalindrome("aba"));
console.log(isPalindrome("Abba"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Bob"));
console.log(isPalindrome("Bob"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("AbBa"));
console.log(isPalindrome(""));
