/* 
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by 
wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing 
at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]   (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". 
Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the 
sheep's position in the queue.

Note: there will always be exactly one wolf in the array.
*/

// P: Takes in an array
// R: Returns a string
// E:
// ["sheep", "sheep", "sheep", "wolf", "sheep"] --> "Oi! Sheep number 1! You are about to be eaten by a wolf!"
// ["sheep", "sheep", "wolf"] --> "Pls go away and stop eating my sheep"
// ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"] --> "Oi! Sheep number 2! You are about to be eaten by a wolf!
//["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"] --> "Oi! Sheep number 6! You are about to be eaten by a wolf!"

// P:

function warnTheSheep(animals) {
  // check for wolf
  // if position is last in array, return "Pls go away and stop eating my sheep"
  // else return `Oi! Sheep number ${N - 4}! You are about to be eaten by a wolf!`
  // where n = length of animals array
  let number = animals.length;

  for (let i = 0; i < number; i++) {
    if (animals[i] === "wolf" && number - i === 1) {
      return "Pls go away and stop eating my sheep";
    } else if (animals[i] === "wolf") {
      return `Oi! Sheep number ${
        number - i - 1
      }! You are about to be eaten by a wolf!`;
    }
  }
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
console.log(
  warnTheSheep([
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "wolf",
    "sheep",
    "sheep",
  ])
);
console.log(
  warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"])
);
