/* 
Write a function that accepts fight string consists of only small letters and return who 
wins the fight. When the left side wins return Left side wins!, when the right side wins 
return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:
 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:
 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

*/
// P: Takes in a string
// R: Returns a string
// E:
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!
// P:
function alphabetWar(fight) {
  // loop through
  // check if letter is on right or left
  // add value to appropriate side
  let left = 0;
  let right = 0;

  for (let i = 0; i < fight.length; i++) {
    if (fight[i] === "w") {
      left += 4;
    } else if (fight[i] === "p") {
      left += 3;
    } else if (fight[i] === "b") {
      left += 2;
    } else if (fight[i] === "s") {
      left += 1;
    } else if (fight[i] === "m") {
      right += 4;
    } else if (fight[i] === "q") {
      right += 3;
    } else if (fight[i] === "d") {
      right += 2;
    } else if (fight[i] === "z") {
      right += 1;
    }
  }

  return left > right
    ? "Left side wins!"
    : right > left
    ? "Right side wins!"
    : "Let's fight again!";
}
