/* 
Coding in function isolate. function accept 1 parameters arr, it's a string array. Your task is to 
put a character "|" into the middle of each element.

If the string length is an even number, use the insert method. for example: "abcd" should became 
"ab|cd". "|" should be inserted between ab and cd.

If the string length is an odd number, use the replacement method. for example: "abcde" should 
became "ab|de". Character c will be replaced by |.

The original array should not be changed, you need to return a new array(if you use the map method, 
you do not need to worry about this).

a little hint: Flexible use of slice() Will make the work more simple.
*/

// P: Takes in an array of strings
// R: Returns an array with strings
// E:
// isolate(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
// isolate(["abcde","fghij"]) should return ["ab|de","fg|ij"]
// isolate(["1234","56789"]) should return ["12|34","56|89"]
// P:

function isolate(arr) {
  // check if length or str is even or odd
  // if odd remove middle char
  // insert "|" in middle of str

  return arr.map((str) => {
    if (str.length % 2) {
      return (str =
        str.slice(0, str.length / 2) +
        "|" +
        str.slice(Math.ceil(str.length / 2)));
    } else
      return (str =
        str.slice(0, str.length / 2) + "|" + str.slice(str.length / 2));
  });
}

console.log(isolate(["abcd", "efgh"]));
console.log(isolate(["abcde", "fghij"]));
console.log(isolate(["1234", "56789"]));
