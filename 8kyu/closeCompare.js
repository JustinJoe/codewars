/* 
Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. 
The function should return whether a is lower than, close to, or higher than b.

a is considered "close to" b if margin is greater than or equal to the distance between 
a and b.

Please note the following:

When a is close to b, return 0.
Otherwise...

When a is less than b, return -1.

When a is greater than b, return 1.

If margin is not given, treat it as zero.

Assume: margin >= 0
*/
// P:
// R: Returns an integer
// E:
// closeCompare(4, 5) --> -1;
// closeCompare(5, 5) --> 0;
// closeCompare(6, 5) --> 1;
// closeCompare(-6, -5) --> -1;
// closeCompare(2, 5, 3) --> 0;
// closeCompare(8.1, 5, 3) --> 1;
// closeCompare(1.99, 5, 3) --> -1;
// P:
let closeCompare = (a, b, margin = 0) => {
  //   margin === 0 ? a - b : margin >= b - a ? 0 : a < b ? -1 : 1;
  return margin >= Math.abs(b - a) ? 0 : a < b ? -1 : 1;
};

console.log(closeCompare(4, 5));
console.log(closeCompare(5, 5));
console.log(closeCompare(6, 5));
console.log(closeCompare(-6, -5));
console.log(closeCompare(2, 5, 3));
console.log(closeCompare(8.1, 5, 3));
console.log(closeCompare(1.99, 5, 3));
