/* 
Character recognition software is widely used to digitise printed texts. 
Thus the texts can be edited, searched and stored on a computer.
When documents (especially pretty old ones written with a typewriter), are digitised 
character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the 
following mistakes:
S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

//P: Takes in a string
//R: Returns a string with corrections made
//E:
// correctDigiText("L0ND0N") --> "LONDON"
// correctDigiText("DUBL1N") --> "DUBLIN"
// correctDigiText("51NGAP0RE") -->"SINGAPORE"
// correctDigiText("BUDAPE5T") --> "BUDAPEST"
// correctDigiText("PAR15") --> "PARIS"
//P: 

function correctDigiText(text) {
    //Split string
    //Loop through and replace 5, 0 and 1 with S, O and I respectively

    return text.split('').map(char => {
        return char === '5' ? 'S' :
               char === '1' ? 'I' :
               char === '0' ? 'O' :
               char
    }).join('');
}

console.log(correctDigiText("L0ND0N"))
console.log(correctDigiText("DUBL1N"))
console.log(correctDigiText("51NGAP0RE"))
console.log(correctDigiText("BUDAPE5T"))
console.log(correctDigiText("PAR15"))