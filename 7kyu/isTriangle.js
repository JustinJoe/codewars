/* 
Implement a function that accepts 3 integer values a, b, c. The function 
should return true if a triangle can be built with the sides of given 
length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

//P: Accepts three integers (a, b and c) as parameters
//R: Returns a boolean - true if the given sides can form a triangle,
//otherwise, false
//E: 
// isTriangle(1,2,2) --> true
// isTriangle(7,2,2) --> false
//P:
function isTriangle(a, b, c) {
    //check if the sum of any two is sides is greater than the 3rd
    //If the condition is met for all, return true
    return (a + b > c
        && a + c > b
        && b + c > a) 
}

console.log(isTriangle(1, 2, 2), true)
console.log(isTriangle(7, 2, 2), false)