/* 
Build a function that returns an array of integers from n to 1 where n>0
*/

//P: Takes in an integer which is greater than 0 as an integer - n > 0
//R: Returns an array of integers from the parameter (n) to 1
//E: Example : n=5 --> [5,4,3,2,1]
//P:
function reverseSeq(n){
    //declare a sequence array
    //check if n is greater than 0
    //if n is not greater than 0, return empty sequence array
    //if n is greater than 0, loop and push numbers to a sequence array
    //return sequence array
    let sequence = [];
    if(n > 0){
        while(n > 0){
            sequence.push(n);
            n--;
        }
    }
    return sequence
}

console.log(reverseSeq(5))
console.log(reverseSeq(3))
console.log(reverseSeq(-1))
console.log(reverseSeq(0))