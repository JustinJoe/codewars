/* 
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

// P: Takes in an array
// R: Returns an integer
// E: 
// totalPoints(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']) --> 30
// totalPoints(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']) --> 10
// totalPoints(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4']) --> 0
// totalPoints(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4']) --> 15
// totalPoints(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4']) --> 12

function totalPoints(arr) {
    // Loop through array
    // Split each array further by :
    // Compare values in each array
    // Sum total points

    return arr.map(score => {
       let scores = score.split(':')
       return scores[0] > scores[1] ? +3 : 
       scores[0] === scores[1] ? +1 :
       +0
    }).reduce((acc,cur) => +acc + +cur, 0)

}

console.log(totalPoints(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']))
console.log(totalPoints(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']))
console.log(totalPoints(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4']))
console.log(totalPoints(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4']))
console.log(totalPoints(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4']))