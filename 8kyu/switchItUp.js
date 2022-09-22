/* 
When provided with a number between 0-9, return it in words.
Input :: 1
Output :: "One".
If your language supports it, try using a switch statement.
*/

// P: Takes in a digit
// R: Returns a string
// E:
// 1 --> "One"
// P:
function switchItUp(num) {
  // Use switch statements

  switch (num) {
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    case 0:
      return "Zero";
  }
}

console.log(switchItUp(1));
