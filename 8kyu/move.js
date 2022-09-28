/* 
In this game, the hero moves from left to right. The player rolls the dice and moves the 
number of spaces indicated by the dice two times.
Create a function for the terminal game that takes the current position of the hero and 
the roll (1-6) and return the new position.

*/
// P: Takes in two integers - position and roll
// R: Returns an integer
// E:
// move(0, 4) --> 8
// move(3, 6) --> 15
// move(2, 5) --> 12
// P:
function move(position, roll) {
  // position + 2 * roll

  return position + 2 * roll;
}

console.log(move(0, 4));
console.log(move(3, 6));
console.log(move(2, 5));
