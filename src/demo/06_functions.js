console.log('functions');

// Default values ans Ende der Paramter

let students = [];

const student1 = createStudent(12, 'brave', 'Harry Potter');
const student2 = createStudent(13, 'curiosity', 'Cho Chang');
const student3 = createStudent(12);
const student4 = createStudent(12, 'Draco Malfoy', 'evil');
// console.log(student1);
// console.log(student2);
// console.log(student3);
students = [student1, student2, student3, student4];

// console.log(assignStudentToHouse(student1));
// console.log(assignStudentToHouse(student2));
// console.log(assignStudentToHouse(student3));

const reachedScore = (score) => score > 10;

graduate(student1, 15);
graduate(student2, 12);

function createStudent(age, personality, name = 'Ron Weasley') {
  return {
    name: name,
    age: age,
    personalityStrength: personality,
    isGraduated: false,
  };
}

function assignStudentToHouse(student) {
  if (student.personalityStrength === 'curiosity') {
    student.house = 'Ravenclaw';
  } else if (student.personalityStrength === 'brave') {
    student.house = 'Griffindor';
  } else {
    student.house = 'HOUSE NOT SET YET';
  }
  return student;
}

function graduate(student, score) {
  student.isGraduated = score > 10;
  return student;
}

function createButton(text) {
  const button = document.createElement('button');
  button.innerText = text;
  return button;
}

const filterButton = createButton('Filter graduated students');
document.body.appendChild(filterButton);

const filterGraduatedStudents = () => {
  const graduatedStudents = students.filter((student) => student.isGraduated);
  console.log(graduatedStudents);
  return graduatedStudents;
};

filterButton.addEventListener('click', filterGraduatedStudents);
