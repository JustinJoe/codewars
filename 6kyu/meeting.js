/* 
John has invited some friends. His list is:
string = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;
Raphael:Corwill;Alfred:Corwill";
Could you make a program that 
    makes this string uppercase
    gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of 
a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)
(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have 
the same first name too.
*/
// P: Takes in a string
// R: Returns a string
// E:
// "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill" -->
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// P:
function meeting(string) {
  // Uppercase() and split by ;
  // map and split by :, reverse each pair and join with (", ")
  // sort and map to return names in brackets and join

  return string
    .toUpperCase()
    .split(";")
    .map((name) => name.split(":").reverse().join(", "))
    .sort()
    .map((name) => {
      return `(${name})`;
    })
    .join("");
}

console.log(
  meeting(
    "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
  )
);
