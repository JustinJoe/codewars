/* 
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to 
calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, 
and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a 
thread pool, with relation to running multiple processes at the same time: 
https://en.wikipedia.org/wiki/Thread_pool
*/

// P: Takes in an array of positive integers, customers and a positive integer, tills
// R: Returns a positive integer, the total time required
// E:
// calculateCheckOutTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

// calculateCheckOutTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

// calculateCheckOutTime([2,3,10], 2)
// should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as
// soon as it becomes free.

// P:

function calculateCheckOutTime(customers, tills) {
  // if n = 1, reduce customer
  // else pick first n customers

  let arr = [];

  for (let i = 0; i < tills; i++) {
    arr[i] = 0;
  }

  for (let i = 0; i < customers.length; i++) {
    arr[0] += customers[i];
    arr.sort((a, b) => a - b);
  }

  return arr;
  //   return arr[arr.length - 1];
}

console.log(calculateCheckOutTime([5, 3, 4], 1));
console.log(calculateCheckOutTime([10, 2, 3, 3], 2));
console.log(calculateCheckOutTime([2, 3, 10], 2));
