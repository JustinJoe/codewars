/* 
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water 
per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan 
will drink, rounded to the smallest value.
*/
// P: Takes in an integer
// R: Returns an integer
// E:
// litres(2) --> 1
// litres(1.4) --> 0
// litres(12.3) --> 6
// litres(0.82) --> 0
// litres(11.8) --> 5
// litres(1787) --> 893 
// litres(0) --> 0
// P:
function litres(time) {
    return Math.floor(time * 0.5);
}

console.log(litres(2))
console.log(litres(1.4))
console.log(litres(12.3))
console.log(litres(0.82))
console.log(litres(11.8))
console.log(litres(1787))
console.log(litres(0))