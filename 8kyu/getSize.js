/* 
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/
// P: Takes in three integers
// R: Returns an array made up of two integers
// E:
// getSize(4, 2, 6) --> [88, 48] 
// getSize(10, 10, 10) --> [600, 1000]
// getSize(4, 2, 6)[0] --> 88
// getSize(4, 2, 6)[1] --> 48
// P:
function getSize(width, height, depth) {
    let area = 2 * ((width * height) + (width * depth) + (height * depth));
    let volume = width * height * depth;
    
    return [area, volume]
}

console.log(getSize(4, 2, 6))
console.log(getSize(10, 10, 10))
console.log(getSize(4, 2, 6)[0])
console.log(getSize(4, 2, 6)[1])