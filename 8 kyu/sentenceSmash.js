/* 
Sentence Smash
Write a function that takes an array of words and smashes them 
together into a sentence and returns the sentence. You can ignore 
any need to sanitize words or add punctuation, but you should add 
spaces between each word. Be careful, there shouldn't be a space 
at the beginning or the end of the sentence!

*/

//P: Takes in array of words as the parameter
//R: Returns a well spaced sentence. NB: No spaces at the beginning 
// or end
//E: 
// Example
// ['  ', hello', 'world', 'this', 'is', 'great']  =>  
// 'hello world this is great'
//P:

function convertArrayToSentence(arr) {
    //join array with spaces
    //remove spaces before and after the sentence

    return arr.join(' ').trim()
}

console.log(convertArrayToSentence(['hello', 'world', 'this', 'is', 'great']))