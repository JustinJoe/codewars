/* 
To find the volume (centimeters cubed) of a cuboid you use the formula:
volume = Length * Width * Height
But someone forgot to use proper record keeping, so we only have the volume, and the 
length of a single side!
It's up to you to find out whether the cuboid has equal sides (= is a cube).
Return true if the cuboid could have equal sides, return false otherwise.
Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
Note: the sides must be integers
*/
// P: Takes in two integers
// R: Returns a boolean
// E:
// cubeChecker(56.3, 1) --> false;
// cubeChecker(-1, 2) --> false;
// cubeChecker(8, 3) --> false;
// cubeChecker(8, 2) --> true;
// cubeChecker(-8,-2) --> false;
// cubeChecker(0, 0) --> false;
// cubeChecker(1, 5) -->  false;
// cubeChecker(125, 5) --> true;
// cubeChecker(125,-5) --> false;
// P:
function cubeChecker(volume, side) {
  return side <= 0 ? false : volume === Math.pow(side, 3);
}

console.log(cubeChecker(56.3, 1));
console.log(cubeChecker(-1, 2));
console.log(cubeChecker(8, 3));
console.log(cubeChecker(8, 2));
console.log(cubeChecker(-8, -2));
console.log(cubeChecker(0, 0));
console.log(cubeChecker(1, 5));
console.log(cubeChecker(125, 5));
console.log(cubeChecker(125, -5));
