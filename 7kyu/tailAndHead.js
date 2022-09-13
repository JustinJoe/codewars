/* 
Coding in function tailAndHead. function accept 1 parameter arr(a number array).

We use an example to explain this task:
You got an array [123,456,789,12,34,56,78].
First, from left to right, the tail of an element and the head of the next element are added 
together. The results are put into an array. like this:
[123,456,789,12,34,56,78]
   3+4 6+7 9+1 2+3 4+5 6+7  
    |   |   |   |   |   |
   [7 ,13 ,10 , 5 , 9 ,13]
And then, Calculate their product and return it(7x13x10x5x9x13=532350)
So, tailAndHead([123,456,789,12,34,56,78]) should return 532350 
All elements of arr are positive integer. If a number is less than 10, its head and tail are 
the same. Please try to use reduce() solve this kata.

*/
// P: Takes in an array of integers
// R: Returns an integer
// E:
// tailAndHead([1,2,3,4,5]) should return 945
// tailAndHead([123,456,789,12,34,56,78]) should return 532350
// tailAndHead([35456,782,569,2454,875]) should return 12012
// tailAndHead([111,2345,66,78,900]) should return 7293
// P:

function tailAndHead(arr) {
  // convert each num to a string
  // declare new arr
  // loop through and split each num
  // parseInt end and start
  // mulitply the numbers

  arr = arr.map((num) => num.toString());

  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let num = parseInt(arr[i][arr[i].length - 1]) + parseInt(arr[i + 1][0]);
    newArr.push(num);
  }

  return newArr.reduce((acc, cur) => acc * cur, 1);
}
console.log(tailAndHead([1, 2, 3, 4, 5]));
console.log(tailAndHead([123, 456, 789, 12, 34, 56, 78]));
console.log(tailAndHead([35456, 782, 569, 2454, 875]));
console.log(tailAndHead([111, 2345, 66, 78, 900]));
