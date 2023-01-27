/* 
Given an array/list [] of integers , Find The maximum difference between the successive 
elements in its sorted form.

Notes
Array/list size is at least 3.
Array/list's numbers Will be mixture of positives and negatives also zeros_
Repetition of numbers in the array/list could occur.
The Maximum Gap is computed Regardless the sign.
*/
// P: Takes in an array
// R: Returns an integer
// E:
// maxGap([13,10,2,9,5]) --> 4;
// maxGap([13,3,5]) --> 8;
// maxGap([24,299,131,14,26,25]) --> 168;
// maxGap([-3,-27,-4,-2]) --> 23;
// maxGap([-7,-42,-809,-14,-12]) --> 767;
// maxGap([12,-5,-7,0,290]) --> 278;
// maxGap([-54,37,0,64,-15,640,0]) --> 576;
// maxGap([130,30,50]) --> 80;
// maxGap([1,1,1]) --> 0;
// maxGap([-1,-1,-1]) --> 0;
// P:
function maxGap(arr) {
  // sort array
  // find difference between consecutive numbers
  // return the max differenece

  arr = arr.sort((a, b) => a - b);

  let maxDiff = arr[1] - arr[0];

  for (let i = 1; i < arr.length - 1; i++) {
    if (maxDiff < arr[i + 1] - arr[i]) maxDiff = arr[i + 1] - arr[i];
  }

  return maxDiff;
}

console.log(maxGap([13, 10, 2, 9, 5]));
console.log(maxGap([13, 3, 5]));
console.log(maxGap([24, 299, 131, 14, 26, 25]));
console.log(maxGap([-3, -27, -4, -2]));
console.log(maxGap([-7, -42, -809, -14, -12]));
console.log(maxGap([12, -5, -7, 0, 290]));
console.log(maxGap([-54, 37, 0, 64, -15, 640, 0]));
console.log(maxGap([130, 30, 50]));
console.log(maxGap([1, 1, 1]));
console.log(maxGap([-1, -1, -1]));
