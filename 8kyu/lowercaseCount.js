/* 
Your task is simply to count the total number of lowercase letters in a string.

*/
// P: Takes in a string
// R: Returns an integer
// E:
// lowercaseCount("abc") ===> 3
// lowercaseCount("abcABC123") ===> 3
// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~") ===> 3
// lowercaseCount("") ===> 0;
// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~") ===> 0
// lowercaseCount("abcdefghijklmnopqrstuvwxyz") ===> 26
// P:
function lowercaseCount(string) {
  return [...string].filter(
    (char, i) => string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123
  ).length;
}

console.log(lowercaseCount("abc"));
console.log(lowercaseCount("abcABC123"));
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
console.log(lowercaseCount(""));
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"));
