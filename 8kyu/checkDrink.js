/* 
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)
*/

// P: Takes in an integer
// R: Returns a string
// E:
// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"
// P:

function checkDrink(age) {
  // If age < 14 drink toddy.
  // age < 18 drink coke
  // age < 21 drink beer
  // Else drink whisky

  return age < 14
    ? "drink toddy"
    : age < 18
    ? "drink coke"
    : age < 21
    ? "drink beer"
    : "drink whisky";
}

console.log(checkDrink(13));
console.log(checkDrink(17));
console.log(checkDrink(18));
console.log(checkDrink(20));
console.log(checkDrink(30));
