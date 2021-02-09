// More exercices about array methods

const hogwartsStudents = [
  {
    name: 'Harry',
    lastName: 'Potter',
    house: { name: 'Gryffindor', color: '#AE0001' },
  },
  {
    name: 'Ron',
    lastName: 'Weasley',
    house: { name: 'Gryffindor', color: '#AE0001' },
  },
  {
    name: 'Hermione',
    lastName: 'Granger',
    house: { name: 'Gryffindor', color: '#AE0001' },
  },
  {
    name: 'Draco',
    lastName: 'Malfoy',
    house: { name: 'Slytherin', color: '#2A623D' },
  },
  {
    name: 'Cedric',
    lastName: 'Diggory',
    house: { name: 'Hufflepuff', color: '#FFDB00' },
  },
  {
    name: 'Luna',
    lastName: 'Lovegood',
    house: { name: 'Ravenclaw', color: '#222F5B' },
  },
];

// 1. Create a container for our cards with a class name 'card-container'
function createCardContainer() {
  const studentCardContainer = document.createElement('div');
  studentCardContainer.classList.add('card-container');
  return studentCardContainer;
}
const studentCardContainer = createCardContainer();
document.body.append(studentCardContainer);

const studentCards = createStudentCards(hogwartsStudents);
studentCardContainer.append(...studentCards);

// 2. Create a card for each student, with a class name 'card'
// 2.1 The background color of the card should be the corresponding house color
// 2.2 The name, lastname and house should be displayed in the card (hint: innerHTML)
function createStudentCards(students) {
  return students.map((student) => {
    const studentCard = document.createElement('div');
    studentCard.classList.add('card');
    studentCard.style.background = student.house.color;
    studentCard.innerHTML = studentCardContent(student);
    return studentCard;
  });
}

function studentCardContent(student) {
  return `<h2>${student.name} ${student.lastName}</h2>
  <span>House: ${student.house.name}</span>
 `;
}
// 3. Create a button, on a click the students should be sorted alphabetically
const sortButton = createButton('Sort!');

sortButton.addEventListener('click', () => sortStudentCards(hogwartsStudents));

function sortStudentCards(students) {
  const sortedStudents = sortStudents(students);
  const sortedStudentCards = createStudentCards(sortedStudents);
  setContent(sortedStudentCards, cardContainer());
}

function sortStudents(students) {
  return students.sort((a, b) => (a.name > b.name ? 1 : -1));
}

document.body.append(sortButton);

// 4. Create a button, on a click only gryffindor students should appear
const filterButton = createButton('Filter!');

filterButton.addEventListener('click', () => {
  const filteredStudentCards = filterStudentCards(hogwartsStudents);
  setContent(filteredStudentCards, cardContainer());
});

function setContent(elements, container = document.body) {
  container.innerHTML = '';
  container.append(...elements);
}

function filterStudentCards(students) {
  const filteredStudents = filterStudents(students);
  return createStudentCards(filteredStudents);
}

function filterStudents(students) {
  return students.filter((student) => student.house.name === 'Gryffindor');
}

document.body.append(filterButton);

// After you are done with this we should clean up the code a bit!
// Some useful helper functions

function createButton(text = 'Button') {
  const button = document.createElement('button');
  button.textContent = text;
  return button;
}

function cardContainer() {
  return document.querySelector('.card-container');
}

// Add a randomizer button
const randomButton = createButton('Randomize!');
document.body.append(randomButton);

randomButton.addEventListener('click', () => {
  const randomizedStudents = randomizeStudentOrder(hogwartsStudents);
  const randomizedStudentCards = createStudentCards(randomizedStudents);
  setContent(randomizedStudentCards, cardContainer());
});

// See the following link for explanation about randomizer function for arrays: https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb

function randomizeStudentOrder(students) {
  for (let i = students.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = students[i];
    students[i] = students[j];
    students[j] = temp;
  }
  console.log(students);
  return students;
}
