// *********** VALUES AND VARIABLE ************************

// let country = `Spain`;
// let continent = `Europe`;
// let population = 47.5;
// let language = `Spanish`;
// let isIsland = false;

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

// ************* CODING CHALLENGE #1  ***************

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

// ************* CODING CHALLENGE #2  ***************

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI}).`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI}).`);
// }

// ************* TYPE CONVERSION & TYPE COERCION  ***************

// console.log('9' - '5'); // -> ?4 correct
// console.log('19' - '13' + '17'); // -> ?617 correct
// console.log('19' - '13' + 17); // -> ?23 correct
// console.log('123' < 57); // -> ?false correct
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?1149->1143 correct


// ************* EQUALITY OPERATORS: === VS ==  ***************

// const numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));

// if (numNeighbours === 1) {
//     console.log(`Only 1 border.`);
// } else if (numNeighbours > 1) {
//     console.log(`More than 1 neighbour.`)
// } else {
//     console.log(`No borders.`)
// }

// ************* LOGICAL OPERATORS ***************

// if (language === `English` && population < 50 && !isIsland) {
//     console.log(`You should live in ${country} :)`);
// } else {
//     console.log(`${country} does not meet your criteria :(`);
// }

// ************* CODING CHALLENGE 4 ***************

// const dolphinScore1 = 97;
// const dolphinScore2 = 112;
// const dolphinScore3 = 101;
// const koolasScore1 = 109;
// const koolasScore2 = 95;
// const koolasScore3 = 106;

// const dolphinScoreAverage = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
// const koolasScoreAverage = (koolasScore1 + koolasScore2 + koolasScore3) / 3;

// console.log(dolphinScoreAverage, koolasScoreAverage);

// if (dolphinScoreAverage > koolasScoreAverage && dolphinScoreAverage >= 100) {
//     console.log(`Dolphins win ${dolphinScoreAverage} vs ${koolasScoreAverage}`);
// } else if (koolasScoreAverage > dolphinScoreAverage && koolasScoreAverage >= 100) {
//     console.log(`Koolas win ${koolasScoreAverage} vs ${dolphinScoreAverage}`);
// } else if (dolphinScoreAverage === koolasScoreAverage && dolphinScoreAverage >= 100) {
//     console.log(`That's a tie...`);
// } else {
//     console.log(`No team has enough points to win...`)
// }

//Data 1: No team has enough points to win...
//Data 2: Koolas win 109 vs 103
//Data 3: That's a tie...

// ************* SWITCH STATAMENT ***************

// language = `arabic`;

// switch (language) {
//     case `chinese`:
//     case `mandarin`:
//         console.log(`${language} is MOST number of native speakers!`);
//         break;
//     case `spanish`:
//         console.log(`${language} is 2nd place in number of native speakers`);
//         break;
//     case `english`:
//         console.log(`${language} is 3rd place`);
//         break;
//     case `hindi`:
//         console.log(`${language} is number 4`);
//         break;
//     case `arabic`:
//         console.log(`${language} is 5th most spoken language`);
//         break;
//     default:
//         console.log(`${language} is not in top 5 most spoken language`);
// }

// ************* TERNARY OPERATOR ***************

// console.log(`${country}'s population is ${population >= 33 ? `over` : `below`} average.`);

// ************* CODING CHALLENGE #4 ***************

// const bill = 430;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.`);
