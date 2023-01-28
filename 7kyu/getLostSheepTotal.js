/* 
Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm 
(sheep returned on Friday stay and don't leave for a weekend).

Sheep return in groups each of the days -> you will be given two arrays with these 
numbers (one for Friday and one for Saturday night). Entries are always positive ints, 
higher than zero.

Farmer knows the total amount of sheep, this is a third parameter. You need to return the 
amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.
*/
// P: Takes in two arrays and an integer
// R: Returns an integer
// E:
// getLostSheepTotal([1,2],[3,4],15) --> 5;
// getLostSheepTotal([3,1,2],[4,5],21) --> 6;
// getLostSheepTotal([5,1,4],[5,4],29) --> 10;
// getLostSheepTotal([11,23,3,4,15],[7,14,9,21,15],300) --> 178;
// getLostSheepTotal([2,7,13,17],[23,56,44,12,1,2,1,],255) --> 77;
// getLostSheepTotal([2,5,8],[11,23,3,4,15,112,12,4],355) --> 156;
// getLostSheepTotal([1,1,1,2,1,2],[2,1,2,1,2,1],30) --> 13;
// getLostSheepTotal([5,10,15],[11,23,3,4,15],89) --> 3;
// getLostSheepTotal([3,6,9,12],[3,2,1,2,3,1],44) --> 2;
// getLostSheepTotal([],[],15) --> 15;
// P:
function getLostSheepTotal(friday, saturday, total) {
  return total - friday.concat(saturday).reduce((acc, cur) => acc + cur, 0);
}

console.log(getLostSheepTotal([1, 2], [3, 4], 15));
console.log(getLostSheepTotal([3, 1, 2], [4, 5], 21));
console.log(getLostSheepTotal([5, 1, 4], [5, 4], 29));
console.log(getLostSheepTotal([11, 23, 3, 4, 15], [7, 14, 9, 21, 15], 300));
console.log(getLostSheepTotal([2, 7, 13, 17], [23, 56, 44, 12, 1, 2, 1], 255));
console.log(getLostSheepTotal([2, 5, 8], [11, 23, 3, 4, 15, 112, 12, 4], 355));
console.log(getLostSheepTotal([1, 1, 1, 2, 1, 2], [2, 1, 2, 1, 2, 1], 30));
console.log(getLostSheepTotal([5, 10, 15], [11, 23, 3, 4, 15], 89));
console.log(getLostSheepTotal([3, 6, 9, 12], [3, 2, 1, 2, 3, 1], 44));
console.log(getLostSheepTotal([], [], 15));
