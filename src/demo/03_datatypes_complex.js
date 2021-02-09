// Objects

const harry = {
  name: 'Harry Potter',
  housePoints: 30,
};
console.log(harry);

harry.housePoints = 40;
harry.animal = 'Owl';

console.log(harry);

// Arrays

const weasleys = ['Ginny', 'Ron', 'Fred', 'George', 'Percy', 'Charly', 'Bill'];
console.log(weasleys);
console.log(weasleys[5]);

// Complex data structure

const ron = {
  name: 'Ron Weasly',
  housePoints: 10,
};

const student = {
  name: 'Some Dude',
  housePoints: 3,
};

const hogwarts = {
  headMaster: 'Albus Dumbledore',
  fourHousesOfHogwarts: [
    {
      name: 'Gryffindor',
      houseHead: 'Minerva McGonnagall',
      students: [harry, ron, student],
    },
    {
      name: 'Hufflepuff',
      houseHead: 'Pomona Spout',
      students: [student, student],
    },
    {
      name: 'Ravenclaw',
      houseHead: 'Filius Flitwick',
      students: [student, student, student],
    },
    {
      name: 'Slytherin',
      houseHead: 'Severus Snape',
      students: [student],
    },
  ],
};
