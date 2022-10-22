/* 
Write a method that takes one argument as name and then greets that name, capitalized and 
ends with an exclamation point.
*/
// P:Takes in a string
// R: Returns a string
// E:
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"
// P:
function greet(name) {
  name = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return `Hello ${name}!`;
}

console.log(greet("riley"));
console.log(greet("JACK"));
