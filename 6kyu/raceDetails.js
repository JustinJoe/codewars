/* 
Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per 
hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet 
per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) 
and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, minutes and 
seconds (round down to the nearest second) or a string in some languages.

If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, 
COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".

Note:
See other examples in "Your test cases".

In Fortran - as in any other language - the returned string is not permitted to contain any 
redundant trailing whitespace: you can use dynamically allocated character strings.

** Hints for people who don't know how to convert to hours, minutes, seconds:

Tortoises don't care about fractions of seconds
Think of calculation by hand using only integers (in your code use or simulate integer division)
or Google: "convert decimal time to hours minutes seconds"
*/

// P: Takes in three integers, speed1 speed2 and distance
// R: Returns an array of three integers, [hour, min, sec]
// E:
// catchUpTime(720, 850, 70) => [0, 32, 18]
// catchUpTime(80, 91, 37)   => [3, 21, 49]
// P:
function catchUpTime(speed1, speed2, distance) {
  // After x ft, catch up
  // time = distance / speed

  if (speed1 >= speed2) return null;
  let time = new Date((distance / (speed2 - speed1)) * 3600 * 1000);
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  return [hour, min, sec];
}

console.log(catchUpTime(720, 850, 70));
// console.log(catchUpTime(80, 91, 37));
// console.log(catchUpTime(80, 100, 40));
// console.log(catchUpTime(720, 850, 37));
