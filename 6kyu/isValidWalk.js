/* 
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too 
early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its 
citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of 
one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single 
block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a 
function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to 
be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', 
or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

//P: Takes in an array of strings
//R: Returns a boolean
//E:
// isValidWalk(['n','s','n','s','n','s','n','s','n','s']) --> 'should return true'
// !isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) --> 'should return false'
// !isValidWalk(['w']) --> 'should return false'
// !isValidWalk(['n','n','n','s','n','s','n','s','n','s']) --> 'should return false'
//P:

function isValidWalk(walk) {
  //check array length is exactly 10
  //n.length == s.length
  //w.length == e.length
  //if true, return true, else false
  let nCount = 0;
  let sCount = 0;
  let wCount = 0;
  let eCount = 0;

  walk.map((direction) =>
    direction === "n"
      ? (nCount += 1)
      : direction === "s"
      ? (sCount += 1)
      : direction === "w"
      ? (wCount += 1)
      : (eCount += 1)
  );
  console.log(nCount);
  console.log(sCount);
  console.log(wCount);
  console.log(eCount);
  return walk.length === 10 && nCount === sCount && wCount === eCount;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
  !isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
console.log(!isValidWalk(["w"]));
console.log(!isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
