/*
Jaden Smith, the son of Will Smith, is the star of films such as 
The Karate Kid (2010) and After Earth (2013). Jaden is also known 
for some of his philosophy that he delivers via Twitter. When writing 
on Twitter, he is known for almost always capitalizing every word. 
For simplicity, you'll have to capitalize each word, check out how 
contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by 
Jaden Smith. The strings are actual quotes from Jaden Smith, but 
they are not capitalized in the same way he originally typed them.

Example:

*/
//P: Takes in a string (sentence) as a parameter.
//R: Returns the string with each letter of each word capitalised
//E: 
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
//P: 

String.prototype.jadenCasedStrings = function () {
    //Split the string into words 
    //Target and capitalise the first letter of each word
    //Join the array and return

    return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

console.log(("How can mirrors be real if our eyes aren't real").jadenCasedStrings())

//Lesson
//Learnt to use 'this' in place of the parameter to be called in this scenario