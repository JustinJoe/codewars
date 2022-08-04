/* 
Simple, remove the spaces from the string, then return the resultant string.
*/

// P: Takes in a string
// R: Returns a stringwith no spaces
// E: 
// removeSpaces('8 j 8   mBliB8g  imjB8B8  jl  B') --> '8j8mBliB8gimjB8B8jlB';
// removeSpaces('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd') --> '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
// removeSpaces('8aaaaa dddd r     ') --> '8aaaaaddddr'
// P:

function removeSpaces(str) {
    //Split based on spaces
    //Join strings with no spaces
    return str.split(' ').join('');

    //Alternatively
    //return str.replace(/\s/g, '')
}

console.log(removeSpaces('8 j 8   mBliB8g  imjB8B8  jl  B'))
console.log(removeSpaces('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))
console.log(removeSpaces('8aaaaa dddd r     '))