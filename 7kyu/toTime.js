/* 
Create a function that takes an integer argument of seconds and converts the value into 
a string describing how many hours and minutes comprise that many seconds.
Any remaining seconds left over are ignored.
Note:
The string output needs to be in the specific form - "X hour(s) and X minute(s)"
*/
// P: Takes in an integer
// R: Returns a string
// E:
// toTime(3600) --> "1 hour(s) and 0 minute(s)";
// toTime(3601) --> "1 hour(s) and 0 minute(s)";
// toTime(3500) --> "0 hour(s) and 58 minute(s)";
// toTime(323500) --> "89 hour(s) and 51 minute(s)";
// toTime(0) --> "0 hour(s) and 0 minute(s)";
// P:
function toTime(seconds) {
  let hour = 0;
  let minute = 0;

  while (seconds >= 3600) {
    seconds -= 3600;
    hour++;
  }

  while (seconds >= 60) {
    seconds -= 60;
    minute++;
  }

  return `${hour} hour(s) and ${minute} minute(s)`;
}

console.log(toTime(3600));
console.log(toTime(3601));
console.log(toTime(3500));
console.log(toTime(323500));
console.log(toTime(0));
