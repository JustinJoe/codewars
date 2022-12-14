/* 
Create a class Ball. Ball objects should accept one argument for "ball type" when 
instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

*/
// P: Takes in a string
// R: Returns an object
// E:
// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"
// P:
class Ball {
  constructor(ballType) {
    this.ballType = ballType || "regular";
  }
}

let ball1 = new Ball();
let ball2 = new Ball("super");

console.log(ball1.ballType);
console.log(ball2.ballType);
