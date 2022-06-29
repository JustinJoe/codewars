/* 
You will be given an array a and a value x. All you need to do is check whether the 
provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. 
*/

//P: Takes in an array (arr, made up of numbers and or strings) and val, which can be a string or number
//R: Returns true if arr contains/includes val
//E:
// check([66, 101], 66) //true 
// check([101, 45, 75, 105, 99, 107], 107) //true
// check(['t', 'e', 's', 't'], 'e')  //true
// check(['what', 'a', 'great', 'kata'], 'kat') //false
//P: 

function check(arr, val) {
    //Check if val can be found in arr
    return arr.includes(val);

    // Alternate Solution
    // return arr.some(element => element === val)
}

console.log(check([66, 101], 66))
console.log(check([101, 45, 75, 105, 99, 107], 107))
console.log(check(['t', 'e', 's', 't'], 'e'))
console.log(check(['what', 'a', 'great', 'kata'], 'kat'))