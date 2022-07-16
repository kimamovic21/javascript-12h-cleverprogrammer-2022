//console.log('Hello world');

//variables
//name = 'Kerim Imamovic';
//console.log(name);

//sentence = 'How you doin';
//console.log(sentence);

//operators
//fruit = prompt('What is your favorie fruit');

//console.log(fruit);

//food = Number( prompt('How much was the food ?'));
//food = 20;
//tipPercentage = 0.2;
//tipPercentage = Number (prompt('tip%?')) / 100;
//tipAmount = food * tipPercentage;
//total = food + tipAmount;

//console.log('tip amount', tipAmount);
//console.log('total', total);

// alert(tipAmount)
//user input
// data types (strings, numbers)
// functions



//Math numbers
// Floor - rounds down
// Ceil - rounds up
// Random - gives you number between 0 and 1

//const randNumber = Math.floor( Math.random() * 10 );
//console.log(randNumber);


// There are 3 types of variables

// if rain 'grab your umbrella'
// else 'wear your sunglasses'

// Neki moj primjer za temperaturu
/*function checkWeather(temp) {
  if (temp > 30) {
    console.log('It is really hot outside');
  } else if ( temp > 15 && temp < 30){
    console.log('The weather is good')
  } else 
    console.log('It is cold outside')
}

checkWeather(-10);*/

// Baby weather app

/*let weather;
if (weather == 'rain') {
  console.log('Grab your umbrella')
} else {
  console.log('Wear you sunglasses')
}*/

// Conditionals are used in statements to compare variables values and/or data types
// They always return a boolea - true or false



//Basics of functions

/*function sayMyName() {
  console.log('Kerim');
}
sayMyName();*/


// Dynamic functions

// Function argumenets are the values received by the function when it is called, they behave as variables, however they only live within the function and can not be accessed outside

/*function sayMyName2(name){
  console.log(name)
}
sayMyName2('Kerim');*/


// string concatenation
/*function greeting(name) {
  greet = 'Hi ' + name + ', Nice to meet you'
 console.log(greet);
}
greeting('Kerim Imamovic')*/


// Template literals provide an easy way to interpolate variables and expressions into strings. Interpolation is an efficient way of concatenation.


/*function greeting(name) {
  greet = `Hi ${name}, nice to meet you`;
  console.log(greet);
}
greeting('Kerim')*/


// The return statement stops the execution of a function and returns a value
/*function sum(a, b) {
  return a + b
}
c = sum(1,2);
console.log(c);*/



// Build tip calculator

/*function sum (a, b) {
  return a + b
}*/

/*function calculateFoodTotal(food, tip) {
  tipPercentage = tip / 100;
  tipAmount = food * tipPercentage;
  total = sum(food, tipAmount)
  return total
}
console.log(calculateFoodTotal(100, 20)) */


// ES6
// Arrow functions allow us to write shorter function syntax =>

// Arrow function with explicit return
/*const sumArrow = (a, b) => {
  return a + b;
}*/

// Arrow function with implicit return
//IMPORTANT: For implicit return remove {}
/* const sumArrow = (a, b) => a + b*/

/*function calculateFoodTotal(food, tip) {
  const tipPercentage = tip / 100;
  const tipAmount = food * tipPercentage;
  const total = sumArrow(food, tipAmount);
  return total;
}
console.log(calculateFoodTotal(100, 20));*/

// otvorimo function folder i uredujemo funkcije




//04 Arrays

//const groceries = ['Banana', 'Apple', 'Orange', 'Pear', 'Blueberry', 'Strawberry'];
//console.log(groceries);
//console.log(groceries[1]);

//The index gives you the location of a value within an array. It is similar to a street number

// Array methods
//groceries.push('Kiwi');
//console.log(groceries);

//groceries.push('Mango');
//console.log(groceries);

//Push add one or more elements to the end of an array and returns the new length of the array

// Array slice
// The slice() method returns the portion of the array you want in a new array

//start from 0 inclusive and up to 2
//console.log(groceries.slice(0,2));
//console.log(groceries.slice(2,5));

//array methods (slice, push, indexOf, length)

//indexOf
//console.log(groceries.indexOf('Apple'));

//Length is an array property that returns the number of elements you have in a give array
//console.log(groceries.length);



// 05 Objects {}
// Objects are a type of variable, quite similar to Arrays but they have something called key-value pairs.

/*const person = {
  name: 'Leonardo',
  shirt: 'white',
};*/

//console.log(person);
//Access object: dot notation vs. object notation
//dot notation
//console.log(person.name);
//console.log(person.shirt);
//bracket notation
//console.log(person['name']);
//console.log(person['shirt']);

//Assign object 
//person.phone = '1-222-333-4444';
//console.log(person.phone);

//console.log(person);

/*const person2 = {
  name: 'Kerim',
  shirt: 'black',
  city: 'Sarajevo',
}
console.log(person2);*/

// ES6 arrow function (2 arguments)
// object
// template literals
/*const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt
  }
  const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt}.`
  return intro;
};
console.log(introducer('Kerim','white'));
console.log(introducer('Leonardo', 'black'));*/

/*const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    liability: 50000,
  }
  const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt}. My net worth is ${person.assets - person.liability}$.`
  return intro;
};
console.log(introducer('Kerim','white'));*/


// A method is a property containing a function definition

/*const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    liability: 50000,
    netWorth: function() {
      return this.assets - this.liability;
    }
  }
  const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt}. My net worth is ${person.netWorth()}$.`
  return intro;
};
console.log(introducer('Kerim','white'));*/


//06 For loops

//const fruits = ['banana', 'apple', 'orange', 'pear'];
/*console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);*/

/*for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}*/

/*for (const fruit of fruits) {
  console.log(fruit);
}*/

/*const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}*/

/*const numbers = [1,2,3,4,5];

for (const number of numbers) {
  console.log(number * 2);
}*/


/*const numbers = [1,2,3,4,5];
console.log(numbers);

let result = [];

for (const number of numbers) {
  //console.log(number * 2);
  result.push(number * 2);
}
console.log(result);*/


/*const double = (numbers) => {
  let result = [];
  for (const number of numbers) {
    result.push(number * 2);
  }
  return result;
}

console.log(double([1, 2, 3, 4, 5, 6]));*/

/*const square = (numbers) => {
  let result = [];
  for (const number of numbers) {
    result.push(number ** 2);
  }
  return result;
}

console.log(square([1, 2, 3, 4, 5, 6]));*/


// 07 Array and object exercises

//02:04:34 video





