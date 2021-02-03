const weasleys = [
  {
    name: 'Arthur',
    yearOfBirth: 1950,
    profession: 'Head of the Misuse of Muggle Artefacts Office',
  },
  {
    name: 'Molly',
    yearOfBirth: 1950,
    profession: 'Housewife',
  },
  {
    name: 'Bill',
    yearOfBirth: 1970,
    profession: 'Curse-Breaker for Gringotts Bank',
  },
  {
    name: 'Charlie',
    yearOfBirth: 1972,
    profession: 'Dragonologist',
  },
  {
    name: 'Percy',
    yearOfBirth: 1976,
    profession: 'Student',
  },
  {
    name: 'Fred',
    yearOfBirth: 1978,
    profession: 'Student',
  },
  {
    name: 'George',
    yearOfBirth: 1978,
    profession: 'Student',
  },
  {
    name: 'Ron',
    yearOfBirth: 1980,
    profession: 'Student',
  },
  {
    name: 'Ginny',
    yearOfBirth: 1981,
    profession: 'Student',
  },
];

const body = window.document.body;

const container = document.createElement('section');
body.appendChild(container);
container.classList.add('container');
container.innerHTML = `<h2>The Weasly family</h2>`;

weasleys.forEach((weasley) => {
  const card = document.createElement('div');
  container.appendChild(card);
  card.classList.add('card');
  card.innerHTML = `<h3>${weasley.name}</h3>
                    <p>${weasley.yearOfBirth}</p>
                    <p>${weasley.profession}</p>`;
});
