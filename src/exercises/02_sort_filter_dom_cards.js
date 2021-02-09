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
const studentCardContainer = document.createElement('div');
studentCardContainer.className = 'card-container';
document.body.append(studentCardContainer);
createStudentCards(hogwartsStudents);

// 2. Create a card for each student, with a class name 'card'
// 2.1 The background color of the card should be the corresponding house color
// 2.2 The name, lastname and house should be displayed in the card (hint: innerHTML)
function createStudentCards(students) {
  students.forEach((student) => {
    const studentCard = document.createElement('div');
    studentCard.className = 'card';
    studentCard.style.background = student.house.color;
    studentCard.innerHTML = `
   <h2>${student.name} ${student.lastName}</h2>
   <span>House: ${student.house.name}</span>
  `;
    studentCardContainer.append(studentCard);
  });
}

// 3. Create a button, on a click the students should be sorted alphabetically
const sortButton = document.createElement('button');
sortButton.textContent = 'Sort!';
sortButton.addEventListener('click', () => {
  hogwartsStudents.sort((a, b) => (a.name > b.name ? 1 : -1));
  studentCardContainer.innerHTML = '';
  createStudentCards(hogwartsStudents);
});
document.body.append(sortButton);

// 4. Create a button, on a click only gryffindor students should appear
const filterButton = document.createElement('button');
filterButton.textContent = 'Filter!';
filterButton.addEventListener('click', () => {
  const filteredStudents = hogwartsStudents.filter(
    (student) => student.house.name === 'Gryffindor'
  );
  studentCardContainer.innerHTML = '';
  createStudentCards(filteredStudents);
});
document.body.append(filterButton);

// After you are done with this we should clean up the code a bit!
