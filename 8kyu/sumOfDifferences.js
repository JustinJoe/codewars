/* 
Your task is to sum the differences between consecutive pairs in the array in descending 
order.
*/
// P: Takes in an arr
// R: Returns an integer
// E:
// sumOfDifferences([1, 2, 10]) --> 9;
// sumOfDifferences([-3, -2, -1]) --> 2;
// P:
function sumOfDifferences(arr) {
  arr = arr.sort((a, b) => b - a);

  let total = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    total += arr[i] - arr[i + 1];
  }

  return total;
}

console.log(sumOfDifferences([1, 2, 10]));
console.log(sumOfDifferences([-3, -2, -1]));
