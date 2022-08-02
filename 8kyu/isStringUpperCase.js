/* 
Create a method to see whether the string is ALL CAPS
*/

//P: Takes in a string
//R: Returns a boolena
//E:
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
//P:

String.prototype.isStringUpperCase = function () {
    //Test for regex
    
    let regex = /^[^a-z]*$/;

    return regex.test(this)
}

console.log('c'.isStringUpperCase())
console.log('C'.isStringUpperCase())
console.log("hello I AM DONALD".isStringUpperCase())
console.log("HELLO I AM DONALD".isStringUpperCase())
console.log("ACSKLDFJSgSKLDFJSKLDFJ".isStringUpperCase())
console.log("ACSKLDFJSGSKLDFJSKLDFJ".isStringUpperCase())