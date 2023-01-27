/* 
You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the 
string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat 
can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can 
jump.
*/
// P: Takes in a string
// R: Returns a string
// E:
// catMouse('C....m') --> "Escaped!";
// catMouse('C..m') --> "Caught!";
// catMouse('C.....m') --> "Escaped!";
// P:
function catMouse(x) {
  return x.length < 6 ? "Caught!" : "Escaped!";
}

console.log(catMouse("C....m"));
console.log(catMouse("C..m"));
console.log(catMouse("C.....m"));
