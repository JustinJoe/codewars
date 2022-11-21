/* 
Some really funny web dev gave you a sequence of numbers from his API response as an 
sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as 
strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
*/
// P: Takes in an array of strings
// R: Returns an array of numbers
// E:
// strToNumArr(["1", "2", "3"]) --> [1, 2, 3]
// strToNumArr(["1.1","2.2","3.3"]) --> [1.1,2.2,3.3]
// P:
function strToNumArr(strArr) {
  return strArr.map((num) => +num);
}

console.log(strToNumArr(["1", "2", "3"]));
console.log(strToNumArr(["1.1", "2.2", "3.3"]));
