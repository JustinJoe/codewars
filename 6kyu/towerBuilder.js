/* 
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is 
represented with "*" character.
*/

//P: Takes a number, nFloors, as the parameter
//R: Returns an array
//E:
// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
//P:

function towerBuilder(nFloors) {
  //declare an empty array
  //loop "*", being increased by 2 till the floor length is reached
  //each floor on a new line

  let building = [];

  for (let i = 0; i < nFloors; i++) {
    building.push(
      " ".repeat(nFloors - i - 1) +
        "*".repeat(i * 2 + 1) +
        " ".repeat(nFloors - i - 1)
    );
  }

  return building;
}

console.log(towerBuilder(6));
