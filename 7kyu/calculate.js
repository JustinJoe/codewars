/* 
Write a function called calculate that takes 3 values. The first and third values are 
numbers. The second value is a character. If the character is "+" , "-", "*", or "/", 
the function will return the result of the corresponding mathematical function on the 
two numbers. If the string is not one of the specified characters, the function should 
return null (throw an ArgumentException in C#).

Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return 
null (throw an ArgumentException in C#)/(None in Python).
*/
// P: Takes in two integers and a string
// R: Returns an integer or null
// E:
// calculate(2,"+", 4); //Should return 6
// calculate(6,"-", 1.5); //Should return 4.5
// calculate(-4,"*", 8); //Should return -32
// calculate(49,"/", -7); //Should return -7
// calculate(8,"m", 2); //Should return null
// calculate(4,"/",0) //Should return null
// calculate(3.2,"+", 8); //Should return 11.2
// calculate(3.2,"-", 8); //Should return -4.8
// calculate(3.2,"/", 8); //Should return 0.4
// calculate(3.2,"*", 8); //Should return 25.6
// calculate(-3,"+", 0); //Should return -3
// calculate(-3,"-", 0); //Should return -3
// calculate(-3,"/", 0); //Should return null
// calculate(-3,"*", 0); //Should return 0
// calculate(-3,"w", 0); //Should return null
// P:
function calculate(num1, operation, num2) {
  if (operation === "+") return num1 + num2;
  else if (operation === "-") return num1 - num2;
  else if ((operation === "/") & (num2 === 0)) return null;
  else if ((operation === "/") & (num2 !== 0)) return num1 / num2;
  else if (operation === "*") return num1 * num2;
  else return null;
}

console.log(calculate(2, "+", 4));
console.log(calculate(6, "-", 1.5));
console.log(calculate(-4, "*", 8));
console.log(calculate(49, "/", -7));
console.log(calculate(8, "m", 2));
console.log(calculate(4, "/", 0));
console.log(calculate(3.2, "+", 8));
console.log(calculate(3.2, "-", 8));
console.log(calculate(3.2, "/", 8));
console.log(calculate(3.2, "*", 8));
console.log(calculate(-3, "+", 0));
console.log(calculate(-3, "-", 0));
console.log(calculate(-3, "/", 0));
console.log(calculate(-3, "*", 0));
console.log(calculate(-3, "w", 0));
