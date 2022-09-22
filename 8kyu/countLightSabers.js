/* 
Inspired by the development team at Vooza, write the function that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
*/

// P: Takes in a string
// R: REturns an integer
// E:
// "anyone else" --> 0
// "Zach" --> 18
// P:

function countLightSabers(name) {
  // if name === Zach, 18
  // else 0

  return name === "Zach" ? 18 : 0;
}

console.log(countLightSabers("anyone else"));
console.log(countLightSabers("Zach"));
