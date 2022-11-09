/* 
Philip's just turned four and he wants to know how old he will be in various years in 
the future such as 2090 or 3044. His parents can't keep up calculating this so they've 
begged you to help them out by writing a programme that can answer Philip's endless 
questions.

Your task is to write a function that takes two parameters: the year of birth and the 
year to count years in relation to. As Philip is getting more curious every day he may 
soon want to know how many years it was until he would be born, so your function needs 
to work with both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." For 
dates in the past: "You will be born in ... year(s)." If the year of birth equals the 
year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind 
that you need to account for both "year" and "years", depending on the result.
*/
// P: Takes in two integers
// R: Returns a string
// E:
// calculateAge(2012, 2016) --> "You are 4 years old."
// calculateAge(1989, 2016) --> "You are 27 years old."
// calculateAge(2000, 2090) --> "You are 90 years old."
// calculateAge(2000, 1990) --> "You will be born in 10 years."
// calculateAge(3400, 3400) --> "You were born this very year!"
// calculateAge(900, 2900) --> "You are 2000 years old."
// calculateAge(2010, 1990) --> "You will be born in 20 years."
// calculateAge(2010, 1500) --> "You will be born in 510 years."
// calculateAge(2011, 2012) --> "You are 1 year old."
// calculateAge(2000, 1999) --> "You will be born in 1 year."
// P:
function  calculateAge(birthYear, countYear) {
    let years = Math.abs(countYear - birthYear);
      
    if (years > 1) years += " years"
    else years += " year";
    
    return countYear > birthYear ? `You are ${years} old.`
        : countYear < birthYear ? `You will be born in ${years}.`
        : `You were born this very year!`;
}

console.log(calculateAge(2012, 2016))
console.log(calculateAge(1989, 2016))
console.log(calculateAge(2000, 2090))
console.log(calculateAge(2000, 1990))
console.log(calculateAge(3400, 3400))
console.log(calculateAge(900, 2900))
console.log(calculateAge(2010, 1990))
console.log(calculateAge(2010, 1500))
console.log(calculateAge(2011, 2012))
console.log(calculateAge(2000, 1999))