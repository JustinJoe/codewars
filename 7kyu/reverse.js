/* 
Write a function reverse which reverses a list (or in clojure's case, any list-like 
data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/
// P: Takes in an array
// R: Returns an array
// E:
// reverse([1,2,3]) --> [3,2,1] )
// reverse([1,null,14,"two"]) --> ["two",14,null,1] )
// P:
function reverse(array) {
    let reversed = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }

    return reversed;
}

console.log(reverse([1,2,3]))
console.log(reverse([1,null,14,"two"]))