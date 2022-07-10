/* 
Let's play! You have to return which player won! In case of a draw return Draw!.
*/

//P: Takes in a two strings
//R: Returns a string
//E:
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"
//P:

function rockPaperScissors(p1, p2) {
    //Compare the values of p1 and p2 and return appropriate result
    return p1 === 'scissors' && p2 === 'paper'
        || p1 === 'rock' && p2 === 'scissors' 
        || p1 === 'paper' && p2 === 'rock' ? 'Player 1 won!' :
        p1 === 'scissors' && p2 === 'rock' 
        || p1 === 'paper' && p2 === 'scissors' 
        || p1 === 'rock' && p2 === 'paper' ? 'Player 2 won!' :
  'Draw!'
}

console.log(rockPaperScissors('scissors', 'paper'))
console.log(rockPaperScissors('scissors', 'rock'))
console.log(rockPaperScissors('rock', 'rock'))