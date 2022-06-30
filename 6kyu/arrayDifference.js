/* 
Your goal in this kata is to implement a difference function, which subtracts one list 
from another and returns the result.

It should remove all values from list a, which are present in list b keeping their 
order.

*/


//P: Takes in two arrays
//R: Returns an array - removing elements in arr2 from arr1
//E: arrayDiff([1,2],[1]) == [2]; arrayDiff([1,2,2,2,3],[2]) == [1,3]
function arrayDiff(arr1, arr2) {
    //loop through arr2
    //compare each element in arr2 to elements arr1
    //if they are the same, remove

    return arr1.filter(num => !arr2.includes(num));

    //Alternative
    // let newArr = [];
  
    // if (arr2.length === 0) {
    //   return arr1;
    // } else { 
    //       for (let j = 0; j < arr1.length; j++) {
    //           if (arr2.includes(arr1[j])) {
    //               newArr.push(arr1[j]);
    //           }
    //       }
    //   }
    //   return newArr;        
}
    
console.log(arrayDiff([1, 2, 2, 2, 2, 3],[]))
console.log(arrayDiff([1, 2, 3],[1, 2]))
console.log(arrayDiff([1, 2],[1]))