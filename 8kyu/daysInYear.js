/* 
A variation of determining leap years, assuming only integers are used and years can be 
negative and positive.

Write a function which will return the days in the year and the year entered in a string. 

For example:
yearDays(2000) returns "2000 has 366 days"
There are a few assumptions we will accept the year 0, even though there is no year 0 in 
the Gregorian Calendar.
Also the basic rule for validating a leap year are as follows
Most years that can be divided evenly by 4 are leap years.
Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.
So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 
365 days
*/
// P: Takes in an integer
// R: Returns a string
// E:
// daysInYear(0) --> '0 has 366 days';
// daysInYear(-64) --> '-64 has 366 days';
// daysInYear(2016) --> '2016 has 366 days';
// daysInYear(1974) --> '1974 has 365 days';
// daysInYear(-10) --> '-10 has 365 days';
// daysInYear(666) --> '666 has 365 days';
// daysInYear(1857) --> '1857 has 365 days';
// daysInYear(1400) --> '1400 has 365 days';
// P:
function daysInYear(year) {
  if (year % 100 === 0) {
    if (year % 400 === 0) return `${year} has 366 days`;
    else return `${year} has 365 days`;
  } else if (year % 4 === 0) {
    return `${year} has 366 days`;
  } else return `${year} has 365 days`;
}

console.log(daysInYear(0));
console.log(daysInYear(-64));
console.log(daysInYear(2016));
console.log(daysInYear(1974));
console.log(daysInYear(-10));
console.log(daysInYear(666));
console.log(daysInYear(1857));
console.log(daysInYear(1400));
