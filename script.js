// let js = `amazing`;

// console.log(40 + 8 + 23 - 10);

// console.log(`Davut`);
// console.log(23);

// let firstName = `Matilda`;

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Variable name conventions
// let davut_matilda = `DM`;
// let $function = 32;

// let person = `davut`;

// const PI = 3.1415;

// let myFirstJob = `Coder`;
// let myCurrentJob = `Teacher`;

// let job1 = `Programmer`;
// let job2 = `Teacher`;

// console.log(myFirstJob);

// *************DATA TYPES***************

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof `Davut`);

// javascriptIsFun = `YES`;
// console.log(typeof javascriptIsFun);

// //Dynamic typing example
// let year;
// console.log(year);
// console.log(typeof year);
// year = 1991;
// console.log(typeof year);

// //JS bug showing null as an 'object' with typeof operator BEWARE of this bug didnt get fixed yet
// console.log(typeof null);


// ************* LET - CONST - VAR ***************

// let age = 30;
// age = 31;

// const birthYear = 1991;

// const job;

// ************* BASIC OPERATORS  ***************

// //Math Operators
// const currentYear = 2037;
// const ageDavut = currentYear - 1992;
// const ageSarah = currentYear - 2018;
// console.log(ageDavut, ageSarah);

// console.log(ageDavut * 2, ageDavut / 10, 2 ** 3);

// const firstName = `Davut`;
// const lastName = `Simsek`;
// console.log(firstName + ` ` + lastName);

// //Assignment Operators
// let x = 10 + 5;
// x += 10;
// x -= 5;
// x *= 2;
// x /= 4;
// x++;
// x--;
// x--;
// console.log(x);

// //Comparasion Operators
// console.log(ageDavut > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(currentYear - 1992 > currentYear - 2018);

// ************* OPERATOR PRESEDENCE  ***************

// const currentYear = 2037;
// const ageDavut = currentYear - 1992;
// const ageSarah = currentYear - 2018;

// console.log(currentYear - 1992 > currentYear - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageDavut + ageSarah) / 2;
// console.log(ageDavut, ageSarah, averageAge);

// ************* STRING & TEMPLATE LITERALS  ***************

// const firstName = `Davut`;
// const job = `engineer`;
// const birthYear = 1992;
// const year = 2037;

// const davut = `I'm ${firstName}, a ${year - birthYear} old ${job}.`;
// console.log(davut);

// ************* TAKING DECISIONS: IF/ELSE STATEMENTS  ***************

// const age = 15;

// if (age >= 18) {
//     console.log(`Sarah can start driving car 🚗`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years 😊`);
// }

// const birthYear = 1992;
// let century;

// if (birthYear < 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// ************* TYPE CONVERSION & TYPE COERCION  ***************

// type conversion-willingly-explicityly
// const inputYear = `1992`;
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number(`Davut`));
// console.log(typeof NaN);

// console.log(String(23), 23);

// type coercion-unwillingly-implicitly
// console.log(`I am ` + 23 + ` years old`);
// console.log(`I am ` + `23` + ` years old`);
// console.log(`I am ` + String(23) + ` years old`);

// console.log(`23` + `10` + 3);
// console.log(`23` - `10` - 3);
// console.log(`23` / `10` / 3);
// console.log(`23` * `10` * 3);

// let n = `1` + 1;
// n--;
// console.log(n);

// ************* TRUTHY & FALSY VALUES  ***************

// There are 5 falsy values(0, ``, undefined, null, NaN)

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(`Davut`));
// console.log(Boolean({}));
// console.log(Boolean(``));
// console.log(Boolean(''));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// const money = 111;
// if (money) {
//     console.log(`Don't spend it all ;)`);
// } else {
//     console.log(`You should get a job...`);
// }

// // let height = 0;
// // if (height) {
// //     console.log(`YAY! Height is defined`);
// // } else {
// //     console.log(`Height is undefined...`);
// // }


// let height = 0;
// if (height === 0 || height) {
//     console.log(`YAY! Height is defined`);
// } else {
//     console.log(`Height is undefined...`);
// }

// ************* EQUALITY OPERATORS: === VS ==  ***************

// const age = `18`;
// if (age === 18) console.log(`You just became an adult (strict)`);
// if (age == 18) console.log(`You just became an adult (loose)`);

// const favorite = Number(prompt(`What's your favorite number?`));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//     console.log(`Cool! 23 is an amazing number`);
// } else if (favorite === 7) {
//     console.log(`7 is also a cool number.`)
// } else if (favorite === 9) {
//     console.log(`9 is also a good number.`)
// } else {
//     console.log(`Number is not 23 or 7 or 9.`)
// }

// if (favorite !== 23) console.log(`Why not 23?`);

// ************* LOGICAL OPERATORS ***************

// const hasDriverLicence = true;
// const hasGoodVision = true;

// console.log(hasDriverLicence && hasGoodVision);
// console.log(hasDriverLicence || hasGoodVision);
// console.log(!hasDriverLicence);


// // if (hasDriverLicence && hasGoodVision) {
// //     console.log(`Sarah is able to drive!`);
// // } else {
// //     console.log(`Someone else should drive...`)
// // }

// const isTired = false;

// if (hasDriverLicence && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive...`)
// }

// ************* SWITCH STATAMENT ***************

// const day = `thursday`;

// switch (day) {
//     case `monday`:
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meetup`);
//         break;
//     case `tuesday`:
//         console.log(`Prepare theory videos`)
//         break;
//     case `wednesday`:
//     case `thursday`:
//         console.log(`Write code examples`);
//         break;
//     case `friday`:
//         console.log(`Record videos`);
//         break;
//     case `saturday`:
//     case `sunday`:
//         console.log(`Enjoy the weekend`);
//         break;
//     default:
//         console.log(`Not a valid day!`);
// }

// if (day === `wednesday` || day === `thursday`) {
//     console.log(`Correct answer...`);
// }

// ************* STATEMENTS & EXPRESSIONS ***************

// //Expression produces a VALUE((part of sentence)
// //Statement does not produce a value but ACTION(a sentence), it and with semicolon(;)

// // Expression Examples
// 3 + 4
// 1992
// true && false && !false

// // Statement Examples
// if (23 > 10) {
//     const str = `23 is bigger`; //here only a part of this code is expression 
// }
// console.log(`I'm ${2037 - 1992} years old.`);

// ************* TERNARY OPERATOR ***************

// const age = 15;
// age > 18 ? console.log(`I'd like to drink beer.`) : null;
// // age > 18 && console.log(`I'd like to drink beer.`); // shor circuit doesn't require false condition
// age > 20 ? console.log(`I'd like to drink wine also.`) : console.log(`I'd like to drink water.`);

// const drink = age === 18 ? `beer` : age >= 19 ? `wine` : `water`;
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = `wine`;
// } else {
//     drink2 = `water`;
// }
// console.log(drink2);


// // Ternary operator can be used in template literal. because is considered a expression
// console.log(`I'd like to drink ${age >= 18 ? `wine` : `water`}`);