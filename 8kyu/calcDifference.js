/* 
In this simple exercise, you will create a program that will take two lists of integers, a and 
b. Each list will consist of 3 positive integers above 0, representing the dimensions of 
cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is 
bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and 
the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.
*/

// P: Takes in two arrays of numbers
// R: Returns an integer
// E:
// calcDifference([3, 2, 5], [1, 4, 4]) --> 14
// calcDifference([9, 7, 2], [5, 2, 2]) --> 106
// calcDifference([11, 2, 5], [1, 10, 8]) --> 30
// calcDifference([4, 4, 7], [3, 9, 3]) --> 31
// calcDifference([15, 20, 25], [10, 30, 25]) --> 0
// P:

const calcDifference = (arr1, arr2) => {
  // multiply the numbers in each array
  // find the absolute difference between the two

  return Math.abs(
    arr1.reduce((acc, cur) => acc * cur, 1) -
      arr2.reduce((acc, cur) => acc * cur, 1)
  );
};

console.log(calcDifference([3, 2, 5], [1, 4, 4]));
console.log(calcDifference([9, 7, 2], [5, 2, 2]));
console.log(calcDifference([11, 2, 5], [1, 10, 8]));
console.log(calcDifference([4, 4, 7], [3, 9, 3]));
console.log(calcDifference([15, 20, 25], [10, 30, 25]));
