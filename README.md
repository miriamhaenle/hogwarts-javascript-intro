# Hogwarts JavaScript School

Welcome to Hogwarts JavaScript school! This is a magical place to learn all about JavaScript.

## How to use this projcet?

This project is a collection of demos and exercises to experience JavaScript and help in understanding its underlying concepts.

To start working with this project you

1. have to clone it `git clone git@github.com:miriamhaenle/hogwarts-javascript-intro.git`
2. Run `npm install` to install the necessary dependencies.
3. Run `npm start`to run the project

Beware of a few facts:
There are two branches that hold information:

- `demo`is the branch for demos and it also contains the exercises
- `solution` holds the solutions for the exercises and demos
- You can switch between the branches by using `git switch name-of-branch` or `git checkout name-of-branch`
-

## Variables and Data types

### 1. Variables

- `let`
- `const`

### 2. Primitive data types

- String
- Number
- Boolean
  ...

### 3. Complex data types

- Arrays
- Objects
- Map / Set ?
- Date / Time ?
  ​

### 4. Operators and Comparison

- Numeric operators
- Strict equality
- Greater than, less than comparison

## Control Flow and Logical Operators

### 5. Control structures

- if / else if / Ternary
- switch
- nesting
  ​

## Arrays and their functions

- map & forEach
- sort
  ​

## Objects, their structures and functions

​

### Object structure

​

### Object functions

​

- work with keys and values Object.keys()
  ​

## Loops

- for / while vs. functional approach
- when to use which (range 1..10 -> for, otherwise forEach / map to iterate over elements)
  ​

## Functions

​

### Classic functions

​

```javascript
export function printSum(a, b) {
  return `The sum of ${a} and ${b} is ${a + b}`;
}
```

​

### Arrow functions

### Higher order functions

​

## fetch & localStorage

- fetch data from API and store data locally
  ​

## Addendum:

​

### Math functions

​

- Calculate the area of a circle / can we draw one?
  ​

```javascript
const coach = {
  name: 'Miriam Haenle',
  age: 30,
  company: 'neue fische GmbH',
  print() {
    return `${this.name} is ${this.age} years old and works for ${this.company}`;
  },
};
export { coach };
```
