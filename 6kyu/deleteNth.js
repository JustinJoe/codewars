/* 
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and 
now they want to show Charlie their entire collection. However, Charlie doesn't like these 
sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. 
Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove 
numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list and a number, create a new list that contains each number of list at most N times, 
without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take 
[1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and 
then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/

// P: Takes in an array and an integer
// R: Returns an array
// E:
// deleteNth([1,2,3,1,2,1,2,3], 2) --> [1,2,3,1,2,3]
// deleteNth([20,37,20,21], 1) --> [20,37,21]
// P:

function deleteNth(arr, x) {
  // declare an object newArr
  // filter arr for each element:
  //    add each new element as a key
  //    value being the number of times it appears
  //    shouldn't be more than x

  let newArr = {};

  return arr.filter((char) => {
    newArr[char] = (newArr[char] || 0) + 1;
    return newArr[char] <= x;
  });
}

console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2));
console.log(deleteNth([20, 37, 20, 21], 1));
