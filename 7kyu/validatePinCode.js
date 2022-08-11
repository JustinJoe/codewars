/* 
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but 
exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
*/

//P: Takes in a string as a parameter
//R: Returns true if the parameter is exactly 4 or 6 numbers only
//E: "1234"   -->  true; "12345"  -->  false; "a234"   -->  false
//P:
function isValidPIN(pin) {
  //Get regex to validate pin
  //Test pin with regex

  let regex = /^(\d{4}$|^\d{6})$/;

  return regex.test(pin);
}

console.log(isValidPIN("1234 "));
console.log(isValidPIN("1234"));
console.log(isValidPIN("12345"));
console.log(isValidPIN("a234"));
console.log(isValidPIN("0000"));
console.log(isValidPIN("-1234"));
console.log(isValidPIN("-1.234"));
