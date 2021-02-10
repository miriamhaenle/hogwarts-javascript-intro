const form = document.querySelector('form');
const inputField = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

let shoppingList = JSON.parse(localStorage.getItem('WizardingEquipment')) || [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  shoppingList.push(inputField.value);
  console.log(shoppingList);
  localStorage.setItem('WizardingEquipment', JSON.stringify(shoppingList));

  const listItem = renderListeItem(inputField.value);
  list.appendChild(listItem);

  inputField.value = '';
});

shoppingList.forEach((listItem) => {
  const item = renderListeItem(listItem);
  list.appendChild(item);
});

function renderListeItem(item) {
  const el = document.createElement('li');
  el.textContent = item;
  return el;
}
