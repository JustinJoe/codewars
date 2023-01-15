/* 
Your goal is to return multiplication table for number that is always an integer from 1 
to 10.

P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at 
the end. If you're unsure about the format, look at the sample tests.
*/
// P: Takes in an integer
// R: Returns a string
// E:
// multiTable(5) --> '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50';
// multiTable(1) --> '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10';
// P:
function multiTable(number) {
  let table = "";

  for (let i = 1; i <= 10; i++) {
    if (i != 10) {
      table += `${i} * ${number} = ${number * i}\n`;
    } else {
      table += `${i} * ${number} = ${number * i}`;
    }
  }

  return table;
}

console.log(multiTable(5));
console.log(multiTable(1));
