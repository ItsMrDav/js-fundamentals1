// *********** VALUES AND VARIABLE ************************

let country = `Spain`;
let continent = `Europe`;
let population = 47.5;
let language = `Spanish`;

// console.log(`The Country is ${country}, in ${continent} and, has ${population}million population.`);

// *********** DATA TYPES ************************

// let isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// *********** LET - CONST - VAR ************************

// const languageSpain = `spanish`;
// let populationSpain = `47.5mil`;
// const continentSpain = `europe`;
// let isMonarch = true;
// let isDemocracy = true;
// console.log(`${languageSpain} ${populationSpain} ${continentSpain} ${isMonarch} ${isDemocracy}`);

// ************* BASIC OPERATORS  ***************

// console.log(`Half of ${country} is ${population / 2} millions people.`);
// population++;
// console.log(`By using increment operator ${country}'s population now is ${population} millions.`);
// let populationFindland = 6;
// console.log(`${country} has ${population - populationFindland} millions more population then Findland.`);
// let populationAverageCountry = 33;
// console.log(`Is ${country} has more population than average=${population > populationAverageCountry}.`);
// console.log(`${country} is in ${continent}, and its ${population} million people speak ${language}.`)

// ************* CODING CHALLANGE #1  ***************

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// Test data:
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const markBMI = massMark / (heightMark * heightMark);
// const johnBMI = massJohn / heightJohn ** 2;

// const markHigerBMI = markBMI > johnBMI;

// console.log(`Mark's BMI is ${markBMI}, John's BMI is ${johnBMI}. Is Mark's BMI higher than John's? ${markHigerBMI}`);

// ************* STRING & TEMPLATE LITERALS  ***************

// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
// console.log(description);

// ************* TAKING DECISIONS: IF/ELSE STATEMENTS  ***************

// if (population > 33) {
//     console.log(`${country}'s population has ${population - 33} million over average.`);
// } else {
//     console.log(`${country}'s population has ${population - 33} million below average.`);
// }

// ************* CODING CHALLANGE #2  ***************

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI}).`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI}).`);
// }

// ************* TYPE CONVERSION & TYPE COERCION  ***************
