/*
//let, const

//String, Number, Boolean, null, undefined(types of data)
const name = "Julian";
const rating = 4.5;
const age = 22;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof z);
//Concatenation
console.log("My name is " + name + " and I am " + age);
//template String
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

const s = "technology, computers, it, code";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(" "));

//Arrays
const numbers = new Array(1, 2, 3, 4, 5, 6);
console.log(numbers);
const fruits = ["apple", "banana", "orange", "grape", "lemon"];
fruits.push("pear"); //adaugare element la sfarsitul array-ului
fruits.unshift("mango"); //adaugare element la inceput
fruits.pop(); //eliminare ultimul element
console.log(Array.isArray(fruits)); //verificare daca o variabila este array
console.log(fruits);

//
const person = {
  firstName: "John",
  lastName: "Smith",
  age: 21,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main St",
    city: "San Francisco",
    state: "MA",
  },
};
console.log(person);
console.log(person.hobbies[1]);
console.log(person.address.city);

person.email = "john@example.com";
console.log(person);

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: true,
  },
];

console.log(todos);
console.log(todos[2].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//for

for (let i = 0; i < 10; i++) {
  console.log(`For loop Number: ${i}`);
}

for (let i = 0; i < todos.length; i++) {
  console.log(` TODOS For loop text: ${todos[i].text}`);
}

for (let todo of todos) {
  console.log(` TODOS For loop ID: ${todo.id}`);
}

//while
let i = 0;
while (i < 10) {
  console.log(`While loop Number: ${i}`);
  i++;
}

//forEach, map, filter
todos.forEach(function (todo) {
  console.log(todo.text);
});

const todoText = todos.map(function (todo) {
  return todo.text;
});
console.log(todoText);

const todoCompleted = todos.map(function (todo) {
  return todo.isCompleted === true;
});
console.log(todoCompleted);

const todoCompletedWithFilter = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoCompletedWithFilter);
const x = "10";
const y = 10;

if (x == 10) {
  console.log("x is 10");
} else if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}
//functions
function addNums(num1, num2) {
  console.log(num1 + num2);
}
addNums(52, 3);

function addNums(num1, num2) {
  return num1 + num2;
}
console.log(addNums(23, 31));

//asa e echivalent pentru void
const addNumsNew = (num1 = 3, num2 = 4) => console.log(num1 + num2);
addNumsNew();

//asa e echivalent pentru functii care returneaza
const addNumsReturn = (num1 = 4, num2 = 32) => num1 + num2;
console.log(addNumsReturn());

const increment = (num1) => num1 + 4;
console.log(increment(4));
*/

//OOP(Object Oriented Programming)

//CONSTRUCTOR
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
}
//INSTANTIATE OBJECT
const person1 = new Person("Stefan", "Iulian", "29-07-2001");
const person2 = new Person("Marean", "Iulian", "29-07-2001");

console.log(person1);
