let wizard = 'Harry';
wizard = 'Ron';
const firstName = 'Ron';
const lastName = 'Weasley';
let age = 11;

// Strings
const school = 'Hogwarts';

// Difference between single quotes and back ticks
console.log(wizard + ' is ' + age + ' years old.');
console.log(`${wizard} is ${++age} years old.`);

console.log(wizard.length);

// Numbers
let number = 2;
const gravitation = 9.81; // m/s^2
const PI = Math.PI;
console.log(PI);

number = 2 + 1;
console.log(number);

// string concatenation vs mathematic operations
console.log(wizard + 8);
console.log(wizard - 8);

const stringNumber = '12.98';
console.log(Number(stringNumber) + 7);
console.log(parseFloat(stringNumber) + 7);
// Show difference between Number() and parseFloat() by adding px to the stringNumber

//Booleans
let isMagician = false;
isMagician = true;

const wand = 'Eldaward';
console.log(wand);

// Null and undefinded

let pet;
console.log(pet);

let houseScore = null;
console.log(houseScore);

// Check type of a value
console.log('Wand: ', typeof wand);
console.log('pet: ', typeof pet);
console.log('House score: ', typeof houseScore);
