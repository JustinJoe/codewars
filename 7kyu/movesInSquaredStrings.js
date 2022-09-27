/* 
This kata is the first of a sequence of four about "Squared Strings".

You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
vertMirror(s) => "dcba\nhgfe\nlkji\nponm"
Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
 horMirror(s) => "mnop\nijkl\nefgh\nabcd"
or printed:

vertical mirror   |horizontal mirror   
abcd --> dcba     |abcd --> mnop 
efgh     hgfe     |efgh     ijkl 
ijkl     lkji     |ijkl     efgh 
mnop     ponm     |mnop     abcd 
Task:
Write these two functions
and

high-order function oper(fct, s) where

fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, 
horMirror)

Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(vertMirror, s) => "dcba\nhgfe\nlkji\nponm"
oper(horMirror, s) => "mnop\nijkl\nefgh\nabcd"
Note:
The form of the parameter fct in oper changes according to the language. You can see each 
form according to the language in "Sample Tests".
*/
// P: Takes in a string
// R: returns a string
// E:
// vertMirror("abcd\nefgh\nijkl\nmnop") --> "dcba\nhgfe\nlkji\nponm"
// P:
function vertMirror(string) {
  // split by \
  // reverse each substrings
  // join with \

  return string
    .split("\n")
    .map((str) => str.split("").reverse().join(""))
    .join("\n");
}

console.log(vertMirror("abcd\nefgh\nijkl\nmnop"));

// P: Takes in a string
// R: Returns a string
// E:
// horMirror("abcd\nefgh\nijkl\nmnop") --> "mnop\nijkl\nefgh\nabcd"
// P:
function horMirror(string) {
  // split by \n
  // reverse array
  // then join with \n

  return string.split("\n").reverse().join("\n");
}

console.log(horMirror("abcd\nefgh\nijkl\nmnop"));

// P: Takes in a function and a string
// R: Returns a string
// E:
// oper(vertMirror, "abcd\nefgh\nijkl\nmnop") => "dcba\nhgfe\nlkji\nponm"
// oper(horMirror, "abcd\nefgh\nijkl\nmnop") => "mnop\nijkl\nefgh\nabcd"
// P:
function oper(fct, string) {
  // return fxn(string)

  return fct(string);
}

console.log(oper(vertMirror, "abcd\nefgh\nijkl\nmnop"));
console.log(oper(horMirror, "abcd\nefgh\nijkl\nmnop"));
