/* 
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
*/

// P: Takes in a string
// R: Returns a string
// E:
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
// "www.codewars.com/katas/" --> "www.codewars.com/katas/"
// P:

function removeAnchorURL(url) {
  // split string based on #
  // return string at index 0

  return url.split("#")[0];
}

console.log(removeAnchorURL("www.codewars.com#about"));
console.log(removeAnchorURL("www.codewars.com?page=1"));
console.log(removeAnchorURL("www.codewars.com/katas/"));
