/* 
Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact 
that everyone constantly wants to have a meeting with you, and that the meeting rooms 
are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? 
Find the first empty one and return its index (N.B. There may be more than one empty room 
in some test cases).

'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!"
*/
// P: Takes in an array
// R: Returns an integer or a string
// E:
// roomAvailable(['X', 'O', 'X']) --> 1;
// roomAvailable(['O','X','X','X','X']) --> 0;
// roomAvailable(['X','X','X','X','X']) --> 'None available!';
// P:
function roomAvailable(x) {
  if (x.includes("O")) {
    for (let i = 0; i < x.length; i++) {
      if (x[i] === "O") return i;
    }
  }

  return "None available!";
}

console.log(roomAvailable(["X", "O", "X"]));
console.log(roomAvailable(["O", "X", "X", "X", "X"]));
console.log(roomAvailable(["X", "X", "X", "X", "X"]));
