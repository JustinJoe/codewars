/* 
Create a function that returns the sum of the two lowest positive 
numbers given an array of minimum 4 positive integers. No floats or 
non-positive integers will be passed.

*/

//P: Takes an array with a minimum of 4 elements
//R: Returns a sum of the two lowest numbers
//E: [19, 5, 42, 2, 77] --> 7; [10, 343445353, 3453445, 3453545353453] --> 3453455
//P:

function sumTwoLowestNum(arr) {
    //check if array has at least four numbers
    //sort array 
    //add first two numbers

    //Alternate Solution
    // return arr.sort((num1, num2) => num1 - num2)
    //           .slice(0, 2)
    //           .reduce((acc, curr) => acc + curr);

    let [num1, num2] = arr.sort((num1, num2) => num1 - num2)

    return num1 + num2;
}

console.log(sumTwoLowestNum([19, 5, 42, 2, 77]))
console.log(sumTwoLowestNum([10, 343445353, 3453445, 3453545353453]))