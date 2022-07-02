/* Write function bmi that calculates body mass index 
(bmi = weight / height2).

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal" 
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/

//P: takes in two number parameters, weight and height
//R: Returns a string: b <= 18.5 ==> "Underweight" bmi <= 25.0 ==> "Normal"; 
//bmi <= 30.0 ==> "Overweight"; bmi > 30 ==> "Obese"
//E: bmi(80, 1.80) ==> "Normal"
//P: 
function calculateBmi(weight, height){
    //Calculate bmi with formula
    //Check for string return
    
    const bmi = weight / height**2;
        
    // if (bmi <= 18.5) {
    //     return 'Underweight';
    // } else if (bmi <= 25) {
    //     return 'Normal';
    // } else return 'Obese'
    
    //Above code refactored
    return bmi <= 18.5 ? 'Underweight' :
            bmi <= 25 ? 'Normal' : 
            bmi <= 30 ? 'Overweight' : 'Obese'
}

console.log(calculateBmi(80, 1.8));
console.log(calculateBmi(70, 1.6));
console.log(calculateBmi(60, 1.85));
console.log(calculateBmi(100, 1.7));