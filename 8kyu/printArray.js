/* 
["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"
*/
// P: Takes in an array
// R: Returns a string
// E:
// ["h","o","l","a"] --> "h,o,l,a"
// P:
function printArray(array) {
  // join elements
  return array.join(",");
}

console.log(printArray(["h", "o", "l", "a"]));
