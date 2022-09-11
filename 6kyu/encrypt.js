/* 
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all 
the odd-indexed characters of S with all the even-indexed characters of S, this process should be 
repeated N times.

Together with the encryption function, you should also implement a decryption function which 
reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument 
without changes.
*/

// P: Takes in a string S and an integer N
// R: Returns a string
// E:
// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// P:

function encrypt(S, n) {
  // if S is empty || n <= 0 return S
  // set up variables for odd and even
  // while i = 0, < S.length; add to odd and even
  // repeat 2 and 3 n times

  if (!S || n <= 0) return S;

  let odd = "";
  let even = "";
  let i = 0;

  while (i < S.length) {
    i % 2 ? (odd += S.charAt(i)) : (even += S.charAt(i));
    i++;
  }

  return encrypt(odd + even, n - 1);
}

console.log(encrypt("012345", 1));
console.log(encrypt("012345", 2));
console.log(encrypt("012345", 3));
console.log(encrypt("01234", 1));
console.log(encrypt("01234", 2));
console.log(encrypt("01234", 3));

// decrypt("This is a test!", 0) --> "This is a test!"
// decrypt("hsi  etTi sats!", 1) --> "This is a test!"
// decrypt("s eT ashi tist!", 2) --> "This is a test!"
// decrypt(" Tah itse sits!", 3) --> "This is a test!"
// decrypt("This is a test!", 4) --> "This is a test!"
// decrypt("This is a test!", -1) --> "This is a test!"
// decrypt("hskt svr neetn!Ti aai eyitrsig", 1) --> "This kata is `very interesting!"
function decrypt(encryptedText, n) {
  // if encryptedText is empty || n <= 0 return encryptedText
  // set up variables for odd and even
  // while i = 0, <= even.length; add to even. then odd
  // repeat 2 and 3 n times
  if (!encryptedText || n <= 0) return encryptedText;

  let text = "";
  let i = 0;
  let offset = encryptedText.length / 2;
  let odd = encryptedText.slice(0, offset);
  let even = encryptedText.slice(offset);

  while (i <= even.length) {
    text += even.charAt(i);
    text += odd.charAt(i);
    i++;
  }

  return decrypt(text, n - 1);
}

console.log(decrypt("This is a test!", 0));
console.log(decrypt("hsi  etTi sats!", 1));
console.log(decrypt("s eT ashi tist!", 2));
console.log(decrypt(" Tah itse sits!", 3));
console.log(decrypt("This is a test!", 4));
console.log(decrypt("This is a test!", -1));
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1));
