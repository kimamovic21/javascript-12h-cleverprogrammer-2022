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

/*const howManyLetters = () => {
  const phrase = 'Hey, can you go to grocery store with me?'
  //for of
  for (const letter of phrase)  {
    console.log(letter)
  }
}
console.log(howManyLetters());*/



/*const howManyLetters = () => {
  const phrase = 'Hey, can you go to grocery store with me?'
  //for in
  for (const letter in phrase) {
    console.log(Number(letter) + 1)
  }
}
howManyLetters();*/


/*const howManyLetters = (phrase) => {
  
  let result = 0;
  for (const index in phrase) {
    console.log(Number(index) + 1)
    result = Number(index) + 1
  }
  return {result}
}
  const phrase = 'Hey, can you go to grocery store with me?'

console.log(howManyLetters(phrase));*/

/*const howManyLetters = (phrase) => {
  let result = 0;
  for (const index in phrase) {
    console.log(Number(index) + 1)
    result = Number(index) + 1
  }
  return {result}
}
  const phrase = prompt('Write your phrase');
console.log(howManyLetters(phrase));*/


/*const howManyLetters = (phrase) => {
  return {result: phrase.length}
}
  const phrase = prompt('Write your phrase');
console.log(howManyLetters(phrase));*/

/*const sumArray = (numbers) => {
  let result = 0; 
  for (const number of numbers){
   console.log(number);
    result = result + number;
  }
  return {result};
}
const nums = [1,2,3,4,5]
console.log(sumArray(nums));*/


// phytontutor web page -> javascript


/*const diffArray = (diffNumbers) => {
  let diffResult = 0;
  for (const number of diffNumbers) {
    diffResult = diffResult - number;
  }
  return diffResult;
}
const diffNums = [20,10, 4, 3,2, 1];
console.log(diffArray(diffNums));*/


/*const max = (numbers) => {
  let result = numbers[0]
  // for loop
  for (const number of numbers) {
    if (number > result) {
      result = number
    }
  }
  return {result};
}
console.log(max([1,2,3,4,5]));*/


/*const letterFrequency = (phrase) => {
  // letterFrequency('haha') -> {'h':2, 'a':2}
  console.log(phrase)
  // make a 'frequency' object {}
  let frequency = {}
  for (const letter of phrase) {
    // check if letter exists in frequency
    if (letter in frequency) {
       // increment the value by +1
     // frequency[letter] = frequency[letter] + 1
      frequency[letter] += 1;
    } else {
      // otherwise, set the value to 1
      frequency[letter] = 1
    }
    // console.log(letter);
  }
  return frequency;
}
*/

//console.log(letterFrequency('haha'));
//console.log(letterFrequency('Hello, my name is Kerim, I come from Sarajevo'));


// wordFrequency ('Kerim Imamovic') -> {'Kerim':1, 'Imamovic':1}
/*const wordFrequency = (phrase) => {
  let frequency = {}
  words = phrase.split(' ');
  for (const word of words) {
    console.log(word);
    if (word in frequency) {
      frequency[word] += 1
    } else {
      frequency[word] = 1
    }
  }
  console.log(words);
  return frequency;
}

console.log(wordFrequency('Kerim Imamovic'));*/


/*const wordFrequency = (phrase) => {
  const words = phrase.split(' ')
  return letterFrequency(words)
}

//console.log(wordFrequency('I am from Bosnia'));
const userInput = prompt('Write your sentence');
console.log(wordFrequency(userInput));*/

// incremental operators
// ++, --, +=, -=


// 08 - Array methods
// higher order functions
// map
// filter
// reduce


// .map() method
// loops and returns an array

// [1,2,3,4,5].map(number => console.log(number));

/*const myArray = [1,2,3,4,5];
console.log(myArray);

myArray.map((number) => {
  console.log(number)
});*/

/*let result = [1,2,3,4].map(number => number * 2);
console.log(result);*/

/*const doubleMap = (numbers) => {
  return numbers.map(number => number * 2)
}
console.log(doubleMap([1,2,3]));*/


// .filter() method
// loops and returns an array with matching conditions

/*const filter = (numbers, greaterThan) => {
  let result = []
  for (const number of numbers) {
    if(number > greaterThan) {
      result.push(number)
    }
  }
  return result;
}
console.log(filter([1,2,3,4,5,6], 3));*/

/*const nums = [1,2,3,4,5,6];
console.log(nums.filter(num => num > 3));*/

/*const nums = [1,2,3,4,5,6];
console.log(nums.filter(num => num > 4 || num < 2));*/

/* if (userIsAuthenticated && userIsPayingMember){
  code goes here ( no ads for example)
} else {
  show you ads
}
*/

const actors = [
  {name: 'John', netWorth: 90000 },
  {name: 'Mike', netWorth: 100000},
  {name: 'George', netWorth: 200000},
  {name: 'Robert', netWorth: 300000},
  {name: 'Richard', netWorth: 4000000},
  {name: 'Liam', netWorth: 500000},
]

/*console.log(actors);
console.log(actors.filter(actor => actor.netWorth > 100000));
const result = actors.filter(actor => actor.netWorth > 1000000);
let names = result.map(actor => actor.name).join(', ')*/

//playground.innerHTML = `<h1>George</h1>`
//playground.innerHTML = `<h1>${result[1].name}</h1>`
//playground.innerHTML = `<h1>${JSON.stringify(result)}</h1>`
//playground.innerHTML = `<h1>${names}</h1>`


// .reduce() method
// example all of the net worth
// SUM: think reduce
// reduce takes in a function as an argument
// reduce loops and gives you back the accumulator


/*const nums = [1,2,3];
nums.reduce(function(prev,next) {
  console.log(prev,next)
})*/


/*const nums = [1,2,3];
const result = nums.reduce(function(prev, curr) {
  return prev + curr
})
console.log(result);*/
// (1+2)=3 + 3 = 6

/*const nums = [1,2,3];
const result = nums.reduce((prev,curr) => prev + curr);
console.log(result); */

/*const sum = (a,b) => {
  return a + b;
}
const nums = [1,2,3,4];
const result = nums.reduce(sum);
console.log(result);*/

/*const mul = (a,b) => {
  return a * b;
}
const nums = [1,2,3,4];
const result = nums.reduce(mul);
console.log(result);*/


/*const sum = (a,b) => {
  return a + b
}

const mul = (a,b) => {
  return a * b
}

const nums = [1,2,3,4];

const result = nums.reduce((a,b) => a + b)
const result2 = nums.reduce((a,b) => a * b)

console.log(result);
console.log(result2);*/


// Using the .reduce() method, create a function that sums up all the net worths of celebrities

/*const sumWorth = actors.reduce((prev, curr) => prev + curr.netWorth, 0)
console.log(sumWorth);*/


// 09 DOM Manipulation

//otvaramo i uredujemo replit DOM manipulation


// select a random element from an array
/*const randomFruit = (fruits) => {

  const randomNumber = Math.floor(Math.random() * fruits.length);
  console.log(randomNumber);
  return fruits[randomNumber];
}

let fruits = ['banana', 'apple', 'orange', 'pear'];
console.log(randomFruit(fruits));*/



// if else if else
// rainy, sunny, overcast
/*const weatherScore = (weather) => {
  let score;
  if (weather === 'rainy') {
    score = 1
  } 
  else if (weather === 'sunny') {
    score = -1
  }
  else {
    score = 0
  }
  return score
}

console.log(weatherScore('rainy'));*/


/*const weatherScore = (weather, weather2) => {
  let score;
  if (weather == 'rainy' && weather2 == 'overcast') {
    score = 2;
  } 
  else if (weather == 'rainy') {
    score = 1;
  }
  else if (weather == 'sunny') {
    score = -1;
  }
  else {
    score = 0;
  }
  return score;
}

console.log(weatherScore('rainy', 'overcast'));*/






