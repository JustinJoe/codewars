/* 
Given an array/list [] of integers , Construct a product array Of same size Such That 
prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

Notes
Array/list size is at least 2.
Array/list's numbers Will be only Positives
Repetition of numbers in the array/list could occur.

Examples
productArray ({12,20}) ==>  return {20,12}
Explanation:
The first element in prod [] array 20 is the product of all array's elements except the 
first element
The second element 12 is the product of all array's elements except the second element.

productArray ({1,5,2}) ==> return {10,2,5}
Explanation:
The first element 10 is the product of all array's elements except the first element 1
The second element 2 is the product of all array's elements except the second element 5
The Third element 5 is the product of all array's elements except the Third element 2.
*/
// P: Takes in an array of integers
// R: Returns an array of integers
// E:
// productArray([12,20]) --> [20,12];
// productArray([3,27,4,2]) --> [216,24,162,324];
// productArray([13,10,5,2,9]) --> [900,1170,2340,5850,1300];
// productArray([16,17,4,3,5,2]) --> [2040,1920,8160,10880,6528,16320];
// productArray([5, 9, 94, 11, 2, 11, 89, 70, 9, 89]) -->
// [1021659768360, 567588760200, 54343604700, 464390803800, 2554149420900,
// 464390803800, 57396616200, 72975697740, 567588760200, 57396616200];
// P:
function productArray(numbers) {
  let prodArray = [];
  if (numbers.length === 2) return [numbers[1], numbers[0]];
  else {
    for (let i = 0; i < numbers.length; i++) {
      let product = numbers
        .filter((num, index) => index !== i)
        .reduce((acc, cur) => acc * cur, 1);
      prodArray.push(product);
    }
  }
  return prodArray;
}

console.log(productArray([12, 20]));
console.log(productArray([3, 27, 4, 2]));
console.log(productArray([13, 10, 5, 2, 9]));
console.log(productArray([16, 17, 4, 3, 5, 2]));
console.log(productArray([5, 9, 94, 11, 2, 11, 89, 70, 9, 89]));
