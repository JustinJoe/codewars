/* 
Define a method/function that removes from a given array of integers all the values 
contained in a second array.
*/
// P: Takes in two arrays
// R: Returns an array
// E:
// removeMarkedElements([1, 1, 2 ,3 ,1 ,2 ,3 ,4], [1, 3]) --> [2, 2, 4]
// removeMarkedElements([1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8], [1, 3, 4, 2])
// --> [5, 6 ,7 ,8]
// removeMarkedElements([8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2 , 3], [2, 4, 3])
// --> [8, 7, 6, 5, 1]
// removeMarkedElements([4, 4, 2 , 3], [2, 2, 4, 3]) --> []
// P:
function removeMarkedElements(integerList, valuesList) {
  return integerList.filter((num) => {
    if (!valuesList.includes(num)) return num;
  });
}

console.log(removeMarkedElements([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]));
console.log(
  removeMarkedElements(
    [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8],
    [1, 3, 4, 2]
  )
);
console.log(
  removeMarkedElements([8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3])
);
console.log(removeMarkedElements([4, 4, 2, 3], [2, 2, 4, 3]));
