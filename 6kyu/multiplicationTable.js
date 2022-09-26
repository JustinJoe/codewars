/* 
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/
// P: Takes in an integer
// R: Returns a 2D array
// E:
// multiplicationTable(3) --> [[1,2,3], [2,4,6], [3,6,9]]
// P:
function multiplicationTable(size) {
  //
  let result = [];

  for (let i = 0; i < size; i++) {
    result[i] = [];
    for (let j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }

  return result;
}

console.log(multiplicationTable(3));
