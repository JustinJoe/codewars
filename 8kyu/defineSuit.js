/* 
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

// P: Takes in a string
// R: Returns a string
// E:
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'
// P:
function defineSuit(card) {
  return card[card.length - 1] === "♣"
    ? "clubs"
    : card[card.length - 1] === "♦"
    ? "diamonds"
    : card[card.length - 1] === "♥"
    ? "hearts"
    : "spades";
}

console.log(defineSuit("3♣"));
console.log(defineSuit("3♦"));
console.log(defineSuit("3♥"));
console.log(defineSuit("3♠"));
