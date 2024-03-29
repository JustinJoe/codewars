/* 
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true 
whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the 
circumstances under which you need to set an alarm). It should return false otherwise. 

*/

//P: Takes two parameters - employed and vacation
//R: Returns a boolean
//E:
// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true
//P:

function setAlarm(employed, vacation) {
  //if employed is true, and vacation is false, return true
  //else return false
  // return employed === true && vacation === false ? true : false;
  return employed === true && vacation === false;
}

console.log(setAlarm(true, true));
console.log(setAlarm(false, true));
console.log(setAlarm(false, false));
console.log(setAlarm(true, false));
