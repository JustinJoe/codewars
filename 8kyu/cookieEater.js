/* 
For this problem you must create a program that says who ate the last cookie. If the input is 
a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the 
cookie. If the input is anything else "the dog" ate the cookie. The way to return the 
statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you 
return Zach is because the input is a string)

Note: Make sure you return the correct message with correct spaces and punctuation.
*/
// P: Takes in a string, number or boolean
// R: Returns a string
// E:
// cookieEater("Ryan") --> "Who ate the last cookie? It was Zach!"
// cookieEater(26) --> "Who ate the last cookie? It was Monica!"
// cookieEater(2.3) --> "Who ate the last cookie? It was Monica!"
// cookieEater(true) --> "Who ate the last cookie? It was the dog!"
// P:
function cookieEater(val) {
  return typeof val === "string"
    ? "Who ate the last cookie? It was Zach!"
    : typeof val === "number"
    ? "Who ate the last cookie? It was Monica!"
    : "Who ate the last cookie? It was the dog!";
}

console.log(cookieEater("Ryan"));
console.log(cookieEater(26));
console.log(cookieEater(2.3));
console.log(cookieEater(true));
