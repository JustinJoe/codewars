/* 
You can print your name on a billboard ad. Find out how much it will cost you. Each 
character has a default price of £30, but that can be different if you are given 2 
parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 
20 leters * 30 = 600 (Space counts as a character).
*/
// P: Takes in a string and an integer
// R: Returns an integer
// E:
// billboardCost("Jeong-Ho Aristotelis") --> 600
// billboardCost("Abishai Charalampos") --> 570
// billboardCost("Idwal Augustin") --> 420
// billboardCost("Hadufuns John",20) --> 260
// billboardCost("Zoroaster Donnchadh") --> 570
// billboardCost("Claude Miljenko") --> 450
// billboardCost("Werner Vígi",15) --> 165
// billboardCost("Anani Fridumar") --> 420
// billboardCost("Paolo Oli") --> 270
// billboardCost("Hjalmar Liupold",40) --> 600
// billboardCost("Simon Eadwulf") --> 390
// P:
function billboardCost(name, price = 30) {
  let total = 0;

  for (let i = 1; i <= name.length; i++) {
    total += price;
  }

  return total;
}

console.log(billboardCost("Jeong-Ho Aristotelis"));
console.log(billboardCost("Abishai Charalampos"));
console.log(billboardCost("Idwal Augustin"));
console.log(billboardCost("Hadufuns John", 20));
console.log(billboardCost("Zoroaster Donnchadh"));
console.log(billboardCost("Claude Miljenko"));
console.log(billboardCost("Werner Vígi", 15));
console.log(billboardCost("Anani Fridumar"));
console.log(billboardCost("Paolo Oli"));
console.log(billboardCost("Hjalmar Liupold", 40));
console.log(billboardCost("Simon Eadwulf"));
