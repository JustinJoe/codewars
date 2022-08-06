/* 
Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 
13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.
With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move 
down to take their place. In case of above 13, they move down by two because there are two omitted numbers 
below them.

Basements (negatives) stay the same as the universal level.
*/

//P: Takes in an integer
//R: Returns an integer
//E: 1 --> 0; 0 --> 0; 5 --> 4; 15 --> 13; -3 --> -3
//P:

function floorNumber(n) {
    //Check for the position of thefloor
    //Return the appropriate American Floor Number
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

console.log(floorNumber(1))
console.log(floorNumber(0))
console.log(floorNumber(5))
console.log(floorNumber(15))
console.log(floorNumber(-3))