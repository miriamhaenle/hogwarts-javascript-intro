const harry = createStudent('Harry Potter', 10, 'bravery');
const cho = createStudent('Cho Chang', 11, 'curiosity');
console.log(harry);
console.log(cho);

assignHouse(harry);
assignHouse(cho);
console.log(harry);

const reachedScore = (score) => {
  return score > 3;
};

graduate(harry, 2);
graduate(cho, 5);
console.log(harry);
console.log(cho);

function createStudent(name, age, personality) {
  return {
    name: name,
    age: age,
    personalityStrength: personality,
    isGraduated: false,
  };
}

function assignHouse(student) {
  if (student.personalityStrength === 'curiosity') {
    student.house = 'Ravenclaw';
  } else if (student.personalityStrength === 'bravery') {
    student.house = 'Gryffindor';
  } else {
    student.house = 'NO HOUSE SET YET';
  }
  return student;
}

function graduate(student, score) {
  student.isGraduated = reachedScore(score);

  return student;
}
