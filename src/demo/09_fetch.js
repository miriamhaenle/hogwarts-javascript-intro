console.log('Fetch Demo');

function fetchCharactersFromApi() {
  fetch('http://hp-api.herokuapp.com/api/characters')
    .then((response) => response.json())
    .then((characters) => drawCharacterCards(characters))
    .catch((error) => console.error(error.message));
}

const fetchButton = createButton('Fetch me some characters');
document.body.appendChild(fetchButton);

function createButton(text) {
  const button = document.createElement('button');
  button.textContent = text;
  button.style.marginLeft = '2rem';
  return button;
}

fetchButton.addEventListener('click', fetchCharactersFromApi);

function createCharacterCard(character) {
  const element = document.createElement('div');
  element.innerText = character.name;
  return element;
}

function drawCharacterCards(characters) {
  const characterCards = characters.map((character) =>
    createCharacterCard(character)
  );
  document.body.append(...characterCards);
}

// Fetch SCA

function postJournalEntries(journalEntry) {
  return fetch('https://muc-2020-w1-student-api.vercel.app/api/journals', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(journalEntry),
  }).then((response) => response.json());
}
const journalButton = createButton('Send Journal Entry');
document.body.append(journalButton);
journalButton.addEventListener('click', () =>
  postJournalEntries({
    comprehension: 10,
    motto: 'Fetch is beautiful',
    notes: 'Fetch me if you can',
    rating: 5,
  })
    .then((journalEntry) => console.log(journalEntry))
    .catch((error) => console.error(error.message))
);
