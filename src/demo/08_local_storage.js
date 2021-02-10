const form = document.querySelector('form');
const inputField = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

let shoppinglist = loadFromLocal('Wizarding equipment') || [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  addItemToList(inputField.value);
  renderList(inputField.value);
  saveToLocal('Wizarding equipment', shoppinglist);
  form.reset();
});

shoppinglist.forEach((listItem) => renderList(listItem));

function addItemToList(item) {
  shoppinglist = [...shoppinglist, item];
}

function renderList(text) {
  const li = document.createElement('li');
  const input = document.createElement('INPUT');
  input.setAttribute('type', 'checkbox');
  li.textContent = text;
  list.appendChild(li);
  li.style.listStyle = 'none';
  li.prepend(input);
}

function saveToLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLocal(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error);
  }
}
