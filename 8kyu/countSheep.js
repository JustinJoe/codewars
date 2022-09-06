/* 
Consider an array/list of sheep where some sheep may be missing from their place. We need a 
function that counts the number of sheep present in the array (true means present).

Hint: Don't forget to check for bad values like null/undefined
*/

// P: Takes in an array
// R: Returns an integer
// E:
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// P:

function countSheep(arr) {
  // loop through array
  // count true

  return arr.filter((sheep) => sheep === true).length;
}

console.log(
  countSheep([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
