/* 
Create a function add(n)/Add(n) which returns a function that always adds n to any 
number

Note for Java: the return type and methods have not been provided to make it a bit 
more challenging.

*/
// P: Takes in an integer
// R: Returns a function
// E:
// let addOne = funcAddition(1);
// addOne(3); // 4
// let addThree = funcAddition(3);
// addThree(3);
// P:
function funcAddition(n) {
  return function (m) {
    return n + m;
  };
}

console.log(funcAddition(1)(3));
console.log(funcAddition(1));
console.log(funcAddition(3)(3));
console.log(funcAddition(3));
