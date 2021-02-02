let studentAge;
let accessToHogwarts = false;

studentAge = prompt('How old are you?');

if (studentAge > 10) {
  accessToHogwarts = true;
}

// if (studentAge > 10) acessToHogwarts = true alert('You have reached the wizard age!');

if (accessToHogwarts === true) {
  // accessToHogwarts is either truthy or falsy
  alert('You have reached the wizard age!');
} else {
  alert('Grow up, child.');
}

// alternative: with ternary

// accessToHogwarts
//   ? alert('You have reached the wizard age!')
//   : alert('Grow up, child.');

const student1 = {
  name: 'Hermine',
  age: 12,
  personalityStrength: 'bravery',
};

const student2 = {
  name: 'Malco',
  age: 12,
  personalityStrength: 'ambition',
};

if (student1.personalityStrength === 'ambition') {
  student1.house = 'Slytherin';
} else if (student1.personalityStrength === 'bravery') {
  student1.house = 'Gryffindor';
} else {
  alert('Figure out your personal strength, young wizard!');
}

// other traits: Ravenclaw: curiosity, Hufflepuff: patience

// Logical Operators

const hour = 22;
const visitor = {
  name: 'Pomona Sprout',
  role: 'teacher',
};

// const visitor = {
//   name: 'Ginny Weasley',
//   role: 'student',
// };

let isStudent = visitor.role === 'student';

if (isStudent && hour < 22) {
  alert('You find wonderful book in the library');
} else if (isStudent && hour >= 22) {
  alert('You should be in bed, young wizard!');
} else {
  alert(
    'What are you doing in the library? You should know everything already.'
  );
}

// || ??
