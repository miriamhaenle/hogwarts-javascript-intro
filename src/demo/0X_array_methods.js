// Arrays and array methods

const weasleys = ['Ginny', 'Ron', 'Fred', 'George', 'Percy', 'Charly', 'Bill'];
// Add a new entry to end of array
weasleys.push('Molly');
weasleys.push('Arthur');
weasleys.push('Harry');

// Remove last entry from array
weasleys.pop();
console.log(weasleys);
// I know which index to look for
console.log(weasleys[1]);
// search for index of Percy
console.log(weasleys.indexOf('Percy'));
console.log(weasleys[4]);
weasleys.push('Bill');
console.log(weasleys);

// Look for something in an array and return first value that matches
console.log(weasleys.find((familyMember) => familyMember === 'Bill'));

// Checks if at least one item in an array passes the test and returns true or false
console.log(weasleys.some((familyMember) => familyMember === 'Harry'));

const potters = ['Harry', 'Lilly', 'James'];

// Nested Array
const magicFamilies = [weasleys, potters];
console.log(magicFamilies);
console.log(magicFamilies[1][2]);

// Spread operator to spread to arrays into a new one
const magicParty = [...weasleys, ...potters];
console.log(magicParty);

// Look for index of an item in an array
const whereIsHarry = magicParty.indexOf('Harry');
console.log(whereIsHarry);

// Removes 1 item from array at index of "whereIsHarry"
magicParty.splice(whereIsHarry, 1);
console.log(magicParty);

//Adds several items to the beginning of array
magicParty.unshift('Hedwig', 'Pig');
// Removes first item of an array
magicParty.shift();
console.log(magicParty);

// Sorts an array
const newArray = weasleys.sort(sortByNameLength);
console.log(newArray);

function sortByNameLength(a, b) {
  return a.length - b.length;
}
