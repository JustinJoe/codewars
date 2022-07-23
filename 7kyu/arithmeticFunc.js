/* 
Given two numbers and an arithmetic operator (the name of it, as a string), return 
the result of the two numbers having that operator used on them.
a and b will both be positive integers, and a will always be the first number in 
the operation, and b always the second.
The four operators are "add", "subtract", "divide", "multiply".
*/

//P: Takes in two numbers and a string, the name of an arithmetic operator
//R: Returns the value of the result of the operation of the two numbers
//E:
// arithmeticFunc(5, 2, 'add') --> 7
// arithmeticFunc(5, 2, 'subtraction') --> 3
// arithmeticFunc(5, 2, 'multiply') --> 10
// arithmeticFunc(5, 2, 'divide') --> 2.5
//P:

function arithmeticFunc(num1, num2, operator) {
    //check and substitute operator
    switch (operator) {
        case ('add'):
            return num1 + num2;
            break;
        case ('subtract'):
            return num1 - num2;
            break;
        case ('multiply'):
            return num1 * num2;
            break;
        case ('divide'):
            return num1 / num2;
            break;
    }
}

console.log(arithmeticFunc(5, 2, 'add'))
console.log(arithmeticFunc(5, 2, 'subtract'))
console.log(arithmeticFunc(5, 2, 'multiply'))
console.log(arithmeticFunc(5, 2, 'divide'))