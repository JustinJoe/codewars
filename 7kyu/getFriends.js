/* 
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, 
you can be sure he's not...
*/

//P: Takes an array made up of strings
//R: Returns an array made up of strings with a length of 4
//E: getFriends(["Ryan", "Kieran", "Mark"]) --> ["Ryan", "Mark"]
//getFriends(["Love", "Your", "Face", "1"]) --> ["Love", "Your", "Face"]
//getFriends(["Ryan", "Jimmy", "123", "4", "Cool Man"]) --> ["Ryan"]
//getFriends(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]) --> ["Jimm", "Cari", "aret"]
//P:

function getFriends(friends) {
    //loop through friends
    //get friends with a string equal to 4
    return friends.filter(friend => friend.length === 4)
}

console.log(getFriends(["Ryan", "Kieran", "Mark"]))
console.log(getFriends(["Love", "Your", "Face", "1"]))
console.log(getFriends(["Ryan", "Jimmy", "123", "4", "Cool Man"]))
console.log(getFriends(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))