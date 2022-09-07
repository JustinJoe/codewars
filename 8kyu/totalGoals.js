/* 
Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.
*/

// P: Takes in three integers - ligaGoals, copaGoals, championsGoals
// R: Returns an integer
// E:
// 5, 10, 2  -->  17
// P:

function totalGoals(ligaGoals, copaGoals, championsGoals) {
  // add up ligaGoals, copaGoals, championsGoals

  return ligaGoals + copaGoals + championsGoals;
}

console.log(totalGoals(5, 10, 2));
