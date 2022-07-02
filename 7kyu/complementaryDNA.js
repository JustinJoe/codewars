/* 
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries 
the "instructions" for the development and functioning of living organisms.

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
Your function receives one side of the DNA (string, except for Haskell); you need to 
return the other complementary side. DNA strand is never empty or there is no DNA at 
all (again, except for Haskell).

*/

//P: Takes in a string (DNA symbols) as the parameter
//R: Returns the complement of each of the symbols
//E: "ATTGC" --> "TAACG"; "GTAT" --> "CATA"
//P: 

function complementaryDNA(dna) {
    //split the string
    //replace with complementary string
    
    return dna.split('')
              .map(element => element === 'G' ? 'C' :
                              element === 'C' ? 'G' :
                              element === 'T' ? 'A' :
                              'T')
              .join('')
}

console.log(complementaryDNA("ATTGC"))
console.log(complementaryDNA("GTAT"))