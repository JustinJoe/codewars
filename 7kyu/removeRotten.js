/* 
Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits 
are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For 
example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple",
"banana","apple"]. Your task is to implement a method that accepts an array of strings 
containing fruits should returns an array of strings where all the rotten fruits are 
replaced by good ones.

Notes
If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase
*/
// P: Takes in an array
// R: Returns an array
// E:
// removeRotten(undefined) --> []
// removeRotten(null) --> []
// removeRotten(["apple","rottenBanana","apple"]) --> ["apple","banana","apple"];
// removeRotten(["apple","banana","kiwi","melone","orange"]) --> ["apple","banana","kiwi","melone","orange"];
// removeRotten([]) --> [];
// P:
function removeRotten(bagOfFruits) {
  return bagOfFruits === null || bagOfFruits === undefined
    ? []
    : bagOfFruits.flat().map((fruit) => {
        if (fruit.startsWith("rotten")) {
          return fruit.slice(6).toLowerCase();
        } else return fruit.toLowerCase();
      });
}

console.log(removeRotten(undefined));
console.log(removeRotten(null));
console.log(removeRotten(["apple", "rottenBanana", "apple"]));
console.log(
  removeRotten(["apple", "banana", "rottenkiwi", "melone", "orange"])
);
console.log(removeRotten([]));
