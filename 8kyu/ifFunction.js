/* 
Create a function called _if which takes 3 arguments: a value bool and 2 functions 
(which do not take any parameters): func1 and func2

When bool is truthy, func1 should be called, otherwise call the func2.

Example:

*/
// P: Takes in a value and two functions
// R: Returns a boolean
// E:
// _if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.
// P:
function _if(bool, func1, func2) {
  return bool == true ? func1() : func2();
}

console.log(
  _if(
    true,
    function () {
      console.log("True");
    },
    function () {
      console.log("false");
    }
  )
);