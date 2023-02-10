/*
Everybody knows the classic "half your age plus seven" dating rule that a lot of people 
follow (including myself). It's the 'recommended' age range in which to date someone.

minimum age <= your age <= maximum age

Task
Given an integer (1 <= n <= 100) representing a person's age, return their minimum and 
maximum age range.

This equation doesn't work when the age <= 14, so use this equation instead:

min = age - 0.10 * age
max = age + 0.10 * age
You should floor all your answers so that an integer is given instead of a float (which 
doesn't represent age). Return your answer in the form [min]-[max]
*/
// P: Takes in an integer
// R: Returns a string
// E:
// datingRange(17) --> "15-20";
// datingRange(40) --> "27-66";
// datingRange(15) --> "14-16";
// datingRange(35) --> "24-56";
// datingRange(10) --> "9-11";
// P:
function datingRange(age) {
  let minAge = 0;
  let maxAge = 0;
  if (age > 14) {
    minAge = Math.floor(age / 2) + 7;
    maxAge = 2 * (age - 7);
  } else {
    minAge = Math.floor(age - 0.1 * age);
    maxAge = Math.floor(age + 0.1 * age);
  }

  return `${minAge}-${maxAge}`;
}

console.log(datingRange(17));
console.log(datingRange(40));
console.log(datingRange(15));
console.log(datingRange(35));
console.log(datingRange(10));
