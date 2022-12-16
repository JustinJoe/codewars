/* 
Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []
*/
// P: Takes in an array and an integer
// R: Returns an array
// E:
// let arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];
// P:
function pickFirstSet(arr, n = 1) {
  return arr.filter((ele, i) => i < n);
}

let arr = ["a", "b", "c", "d", "e"];
console.log(pickFirstSet(arr));
console.log(pickFirstSet(arr, 2));
console.log(pickFirstSet(arr, 3));
console.log(pickFirstSet(arr, 0));
