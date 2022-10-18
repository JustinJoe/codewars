/* 
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! 
if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first 
capital letter (Xxxx).
*/
// P: Takes in a string
// R: Returns a string
// E:
// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given or `name` = ""        => return "Hello, World!"
// P:
function hello(name) {
  return name === "" || name === undefined
    ? `Hello, World!`
    : `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
}

console.log(hello("john"));
console.log(hello("aliCE"));
console.log(hello(""));
