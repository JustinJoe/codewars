/* 
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from 
the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

Example:

let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'
Notes
The given string will never be empty.
The length of the array is always one less than the length of the string.
All numbers are valid.
There can be duplicate letters and numbers.
*/
// P: Takes in a string and an array of integers
// R: Returns a string
// E:
// lastSurvivor('abc', [1, 1]) --> 'a';
// lastSurvivor('kbc', [0, 1]) --> 'b';
// lastSurvivor('zbk', [2, 1]) --> 'z';
// lastSurvivor('c', []) --> 'c';
// P:
function lastSurvivor(letters, coords) {
  while (coords.length > 0) {
    letters = [...letters]
      .map((letter, i) => {
        if (i !== coords[0]) return letter;
      })
      .join("");
    coords = coords.slice(1);
  }
  return letters;
}

console.log(lastSurvivor("abc", [1, 1]));
console.log(lastSurvivor("kbc", [0, 1]));
console.log(lastSurvivor("zbk", [2, 1]));
console.log(lastSurvivor("c", []));
