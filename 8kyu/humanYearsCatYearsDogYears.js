/* 
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

*/
// P: Takes in an integer
// R: Returns an array
// E:
// humanYearsCatYearsDogYears(1) --> [1,15,15];
// humanYearsCatYearsDogYears(2) --> [2,24,24];
// humanYearsCatYearsDogYears(10) --> [10,56,64];
// P:
function humanYearsCatYearsDogYears(humanYears) {
  let years = [0, 0, 0];

  years[0] = humanYears;

  for (let i = 1; i <= humanYears; i++) {
    if (i == 1) {
      years[1] += 15;
      years[2] += 15;
    } else if (i == 2) {
      years[1] += 9;
      years[2] += 9;
    } else {
      years[1] += 4;
      years[2] += 5;
    }
  }

  return years;
}

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(10));
