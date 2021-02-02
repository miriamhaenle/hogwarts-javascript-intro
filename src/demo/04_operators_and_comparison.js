// Operators
let number = 1;

console.log(number++); // prints 1 and increments afterwards

console.log(++number); // increments from 2 to 3 and prints 3

number += number;
console.log(number); // prints 6

// Difference between == and ===
let ageString = '12';
let age = 12;
console.log(ageString == age); // truthy
console.log(ageString === age); // falsy

// >
const wizard1 = 'Harry'; // Change to small h for demo
const wizard2 = 'Ron';
const wizard3 = 'Jerry';

console.log(wizard1 > wizard2);
console.log(wizard1.length > wizard2.length);

console.log(wizard1 > wizard3);
console.log(wizard1.length > wizard3.length);

console.log(wizard1.charCodeAt(0), wizard1[0]);
console.log(wizard3.charCodeAt(0), wizard3[0]);
