/* 
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.
*/
// P: Takes in a string
// R: Returns a string
// E:
// correctPolishLetters("Jędrzej Błądziński") --> "Jedrzej Bladzinski";
// correctPolishLetters("Lech Wałęsa") --> "Lech Walesa";
// correctPolishLetters("Maria Skłodowska-Curie") --> "Maria Sklodowska-Curie";
// P:
function correctPolishLetters(string) {
  return [...string]
    .map((char) => {
      if (char === "ą") return "a";
      else if (char === "ć") return "c";
      else if (char === "ę") return "e";
      else if (char === "ł") return "l";
      else if (char === "ń") return "n";
      else if (char === "ó") return "o";
      else if (char === "ś") return "s";
      else if (char === "ź" || char === "ż") return "z";
      else return char;
    })
    .join("");
}

console.log(correctPolishLetters("Jędrzej Błądziński"));
console.log(correctPolishLetters("Lech Wałęsa"));
console.log(correctPolishLetters("Maria Skłodowska-Curie"));
