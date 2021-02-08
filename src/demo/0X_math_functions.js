//Math Object and differences in rounding
let someNumber = 4.48;
console.log(Math.round(someNumber));
console.log(Math.ceil(someNumber));
console.log(Math.floor(someNumber));

// Array of objects
const spells = [
  {
    spell: 'Alohomora',
    description: 'Unlocking charm',
  },
  {
    spell: 'Bombarda',
    description: 'Exploding charm',
  },
  {
    spell: 'Engorgio',
    description: 'Engorgement charm',
  },
  {
    spell: 'Expecto Patronum',
    description: 'Patronus charm',
  },
  {
    spell: 'Expelliarmus',
    description: 'Disarming charm',
  },
  {
    spell: 'Finite Incantatem',
    description: 'General counter-spell',
  },
  {
    spell: 'Immobulus',
    description: 'Freezing charm',
  },
  {
    spell: 'Incendio',
    description: 'Fire-making spell',
  },
  {
    spell: 'Lumos',
    description: 'Wand-lighting charm',
  },
  {
    spell: 'Petrificus Totalus',
    description: 'Full Body-Bind Curse',
  },
];

function castSpell(spells) {
  const index = Math.floor(Math.random() * spells.length);
  return `Harry casts: ${spells[index].spell.toUpperCase()}!`;
}

console.log(castSpell(spells));
