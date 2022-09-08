/* 
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will 
have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which 
will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find the number n of 
cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and 
you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 
if there is no such n.

Examples:
*/

// P: Takes in an integer
// R: Returns an integer
// E:
// findNumberOfCubes(1071225) --> 45
// findNumberOfCubes(91716553919377) --> -1
// P:

function findNumberOfCubes(m) {
  //
  let count = 0;
  let newM = m;

  while (newM > 0) {
    newM = newM - (count + 1) ** 3;
    count++;
  }

  let n = 0;
  for (let i = count; i > 0; i--) {
    n += i ** 3;
  }

  if (n === m) {
    return count;
  } else return -1;
}

console.log(findNumberOfCubes(1071225));
console.log(findNumberOfCubes(91716553919377));
