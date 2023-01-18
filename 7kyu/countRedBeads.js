/* 
Two red beads are placed between every two blue beads. There are N blue beads. After 
looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, 
TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.
*/
// P: Takes in an integer
// R: Returns an integer
// E:
// countRedBeads(0) --> 0;
// countRedBeads(1) --> 0;
// countRedBeads(3) --> 4;
// countRedBeads(5) --> 8;
// P:
function countRedBeads(num) {
  return num < 2 ? 0 : 2 * (num - 1);
}

console.log(countRedBeads(0));
console.log(countRedBeads(1));
console.log(countRedBeads(3));
console.log(countRedBeads(5));
