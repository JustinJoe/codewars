/* 
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle 
about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) 
or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return 
Woohoo!, otherwise return Car Dead
*/
// P: Takes in an integer
// R: Returns a string
// E:
// countBumps("n") --> "Woohoo!"
// countBumps("__nn_nnnn__n_n___n____nn__nnn") --> "Woohoo!"
// countBumps("nnn_n__n_n___nnnnn___n__nnn__") --> "Woohoo!"
// countBumps("_nnnnnnn_n__n______nn__nn_nnn") --> "Car Dead"
// countBumps("______n___n_") --> "Woohoo!"
// P:
function countBumps(bumps) {
  // (n in bumps).length <= 15, "Woohoo!"
  // "Car Dead"

  return bumps.split("").filter((bump) => bump === "n").length <= 15
    ? "Woohoo!"
    : "Car Dead";
}
