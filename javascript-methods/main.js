var numberOne = 4;
var numberTwo = 5;
var numberThree = 6;

var maximumValue = Math.max(numberOne, numberTwo, numberThree);
console.log(maximumValue);

var heroes = ['spiderman', 'batman', 'dr.strange', 'antman'];

var randomNumber = Math.random();
randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log(randomIndex);

var randomHero = heroes[randomIndex];
console.log(randomHero);

var library = [
  {
    title: 'Python for beginners',
    author: 'Janice Lee'
  },
  {
    title: 'Go for beginners',
    author: 'Cody Miller'
  },
  {
    title: 'Rust for beginners',
    author: 'Ellie Hwang'
  }

];

var lastBook = library.pop();
console.log(lastBook);

var firstBook = library.shift();
console.log(firstBook);

var js = { title: 'Javascript for Impatient Programmers', author: 'Dr.Axel Rauschmayer' };
var css = { title: 'CSS secrets', author: 'Lea Verou' };

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

var fullName = 'Janice Lee';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log(sayMyName);
