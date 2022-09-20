/* 
Create a combat function that takes the player's current health and the amount of damage 
recieved, and returns the player's new health. Health can't be less than 0.
*/

// P: Takes in two integers - health and damage
// R: Returns an integer
// E:
// combat(100, 5) --> 95
// combat(92, 8) --> 84
// combat(20, 30) --> 0
// P:
function combat(health, damage) {
  // health - damage

  return health - damage < 0 ? 0 : health - damage;
}

console.log(combat(100, 5));
console.log(combat(92, 8));
console.log(combat(20, 30));
