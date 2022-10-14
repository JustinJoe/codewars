/* 
Create a function named combineNames that accepts two parameters (first and last name). 
The function should return the full name.
*/
// P: Takes in two strings
// R: Returns a string
// E:
// combineNames('James', 'Stevens') --> 'James Stevens'
// P:
function combineNames(firstName, lastName) {
  // join last to first name with a space

  return `${firstName} ${lastName}`;
}

console.log(combineNames("James", "Stevens"));
