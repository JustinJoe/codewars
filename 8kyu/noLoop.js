/* 
You will be given an array a and a value x. All you need to do is check whether the 
provided array contains the value, without using a loop.

Array can contain numbers or strings. x can be either. Return true if the array contains 
the value, false if not. With strings you will need to account for case.
*/

// P: Takes in an array and a value
// R: Returns a boolean
// E:
// noLoop([66, 101], 66) --> true;
// noLoop([80, 117, 115, 104, 45, 85, 112, 115], 45) --> true;
// noLoop(['t', 'e', 's', 't'], 'e') --> true;
// noLoop(['what', 'a', 'great', 'kata'], 'kat') --> false;
// P:
function noLoop(a, x) {
  return a.includes(x);
}

console.log(noLoop([66, 101], 66));
console.log(noLoop([80, 117, 115, 104, 45, 85, 112, 115], 45));
console.log(noLoop(["t", "e", "s", "t"], "e"));
console.log(noLoop(["what", "a", "great", "kata"], "kat"));
