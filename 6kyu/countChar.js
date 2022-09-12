/* 
The main idea is to count all the occurring characters in a string. If you have a string like aba, 
then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

// P: Takes in a string
// R: Returns an object
// E:
// "aba" --> {'a': 2, 'b': 1}
// P:

function countChar(str) {
  // set variable = split str into char
  // get unique values - obj
  // count chars into obj

  let arr = str.split("");
  let obj = {};

  arr.map((char) => {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  });

  return obj;
}

console.log(countChar("aba"));
