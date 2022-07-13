/* 
Define String.prototype.toAlternatingCase (or a similar function/method such 
as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected 
language; see the initial solution for details) such that each lowercase 
letter becomes uppercase and each uppercase letter becomes lowercase. 
*/

//P: Takes in a string as a parameter
//R: Returns a string with lower cases capitalised and vice versa
//E: 
// "hello world".alternatingCase() === "HELLO WORLD"
// "HELLO WORLD".alternatingCase() === "hello world"
// "hello WORLD".alternatingCase() === "HELLO world"
// "HeLLo WoRLD".alternatingCase() === "hEllO wOrld"
// "12345".alternatingCase() === "12345" 
// "1a2b3c4d5e".alternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".alternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
//P:

String.prototype.alternatingCase = function () {
    //Split and loop through string
    //Check for lower cases and return capitalised; capitalised and return lower cased
    return this.split('').map(char => char.toLowerCase() != char ? char.toLowerCase() : char.toUpperCase()).join('')
}

console.log("HELLO WORLD".alternatingCase())
console.log("hello world".alternatingCase())
console.log("1a2b3c4d5e".alternatingCase())
console.log("hello WORLD".alternatingCase())
console.log("12345".alternatingCase())
console.log("String.prototype.toAlternatingCase".alternatingCase())
console.log("HeLLo WoRLD".alternatingCase())