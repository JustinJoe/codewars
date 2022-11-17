/* 
Complete the function that receives as input a string, and produces outputs according 
to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of 
the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct 
capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/
// P: Takes in a string
// R: Returns a string
// E:
// getDrink("jabrOni") --> "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'"
// getDrink("scHOOl counselor") --> "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'"
// getDrink("prOgramMer") --> "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'"
// getDrink("bike ganG member") --> "Moonshine", "'Bike Gang Member' should map to 'Moonshine'"
// getDrink("poLiTiCian") --> "Your tax dollars", "'Politician' should map to 'Your tax dollars'"
// getDrink("rapper") --> "Cristal", "'Rapper' should map to 'Cristal'"
// getDrink("pundit") --> "Beer", "'Pundit' should map to 'Beer'"
// getDrink("Pug") --> "Beer", "'Pug' should map to 'Beer'"
// P:
function getDrink(param){
    param = param.split(" ").map(par => par[0].toUpperCase() + par.slice(1).toLowerCase()).join(" ")
    
    switch(param) {
        case "Jabroni":
          return "Patron Tequila";
        case "School Counselor":
          return "Anything with Alcohol";
        case "Programmer":
          return "Hipster Craft Beer";
        case "Bike Gang Member":
          return "Moonshine";
        case "Politician":
          return "Your tax dollars";
        case "Rapper":
          return "Cristal";
        default:
          return "Beer";
    }
  }

  console.log(getDrink("jabrOni"))
  console.log(getDrink("scHOOl counselor"))
  console.log(getDrink("prOgramMer"))
  console.log(getDrink("bike ganG member"))
  console.log(getDrink("poLiTiCian"))
  console.log(getDrink("rapper"))
  console.log(getDrink("pundit"))
  console.log(getDrink("Pug"))