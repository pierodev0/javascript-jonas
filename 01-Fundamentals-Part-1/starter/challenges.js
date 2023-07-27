/* 1 */
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter) */
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both 
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
// m tall.

let marksWeight = 78;
let marksHeight = 1.69;
let jonWeight = 92;
let jonHeight = 1.95;

function calculateBMI(mass, height){
    const bmi = mass / height**2;
    return bmi
}

marksBMI = calculateBMI(marksWeight,marksHeight);
jonBMI = calculateBMI(jonWeight,jonHeight);
console.log(marksBMI);
console.log(jonBMI);

const markHigherBMI = marksBMI > jonBMI;
console.log(markHigherBMI);