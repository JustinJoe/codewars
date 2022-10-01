/* 
We want to know the index of the vowels in a given word, for example, there are two 
vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)
*/
// P: Takes in a string
// R: Returns an array
// E:
// "Mmmm"  => []
// "Super" => [2,4]
// "Apple" => [1,5]
// "YoMama" -> [1,2,4,6]
// P:
function vowelIndices(word) {
  // word.toLowerCase()
  // if letter == vowel --> index + 1

  let vowels = ["a", "e", "i", "o", "u", "y"];

  return [...word.toLowerCase()]
    .map((letter, index) => {
      if (vowels.includes(letter)) return index + 1;
    })
    .filter((num) => num !== undefined);
}

console.log(vowelIndices("Mmmm"));
console.log(vowelIndices("Super"));
console.log(vowelIndices("Apple"));
console.log(vowelIndices("YoMama"));
