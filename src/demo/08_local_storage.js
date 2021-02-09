const form = document.querySelector('form');
const inputField = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

let shoppinglist =
  JSON.parse(localStorage.getItem('Wizarding equipment')) || [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  liMaker(inputField.value);
  shoppinglist.push(inputField.value);
  localStorage.setItem('Wizarding equipment', JSON.stringify(shoppinglist));
  inputField.value = '';
});

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
};

shoppinglist.forEach((listItem) => liMaker(listItem));
