/* 
Create a function that returns the number of arguments provided
*/
// P: Takes in a number of arguments
// R: Returns an integer
// E:
// countArgs(1, 2) --> 2;
// countArgs() --> 0;
// countArgs('A', 'B', 'C') --> 3;
// countArgs(["foo", "bar"]) --> 1;
// P:
function countArgs(arg) {
  return arguments.length;
}

console.log(countArgs(1, 2));
console.log(countArgs());
console.log(countArgs("A", "B", "C"));
console.log(countArgs(["foo", "bar"]));
