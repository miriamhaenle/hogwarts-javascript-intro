// Welcome! Let's build a small todo app!

// I already wrote HTML and CSS for the app, so you don't have to worry about that.

let todos = todos; //  should be an empty array at first
// For Each todo we need to execute the renderTodo function which you will write down below

// First: We need an event listener on the input field, look up the keydown-event with 'enter' as key

const input = document.querySelector('input');
input
  .addEventListener
  // your code here
  ();

// Second: Write a function addTodo which takes the input value as a parameter and saves it into a new array of todos.

function addTodo(name) {
  // your code here
}

// Third: Write a function renderTodo which renders your todo list to HTML and shows under the input.
// As we are writing a todo list try to render the todos as checkbox items

function renderTodo(todo) {
  // your code here
}

// Fourth: Write a function saveToLocal which saves your todos into the local storage, a hint; you might need to stringify some data.
//Also write a function loadFromLocal where you get the data back from local storage. You might need to convert data back to an array

function saveToLocal(name, data) {
  // your code here
}

function loadFromLocal(name) {
  // your code here
  // remember to do some error handling here
}

// Fith: Use the function saveToLocal in the function addTodo to save your new array into local storage. Also, in line 5 use the loadFromLocal function to save it in the variable todos.
