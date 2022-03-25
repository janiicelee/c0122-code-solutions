const takeAChance = require('./take-a-chance');

const promise1 = takeAChance('Janice');

promise1.then(value => {
  console.log(value);
});

promise1.catch(error => {
  console.log(error.message);
});
