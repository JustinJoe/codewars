/* 
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death 
is defined as having health <= 0.
Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You 
can mutate the Fighter objects.

Example:
  declareWinner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry") => "Harry"
  declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry") => "Harald"
  declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald") => "Harald"
  declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry") => "Harald"
  declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald") => "Harald"
  */
//P: Takes in two classes,
//R: Returns the winner's name
//E:

class Fighter {
  constructor(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () {
      return this.name;
    };
  }
}

function declareWinner(fighterOne, fighterTwo, firstAttacker) {
  let f1Health = Math.ceil(fighterOne.health / fighterTwo.damagePerAttack);
  let f2Health = Math.ceil(fighterTwo.health / fighterOne.damagePerAttack);

  if (f1Health < f2Health) {
    return fighterTwo.name;
  } else if (f2Health < f1Health) {
    return fighterOne.name;
  } else {
    return firstAttacker;
  }
}

console.log(
  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")
);
console.log(
  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"),
  "Harry"
);
console.log(
  declareWinner(
    new Fighter("Harald", 20, 5),
    new Fighter("Harry", 5, 4),
    "Harry"
  )
);
console.log(
  declareWinner(
    new Fighter("Harald", 20, 5),
    new Fighter("Harry", 5, 4),
    "Harald"
  )
);
console.log(
  declareWinner(
    new Fighter("Jerry", 30, 3),
    new Fighter("Harald", 20, 5),
    "Jerry"
  )
);
console.log(
  declareWinner(
    new Fighter("Jerry", 30, 3),
    new Fighter("Harald", 20, 5),
    "Harald"
  )
);
