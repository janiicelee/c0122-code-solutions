fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error('fetch failed!', err));

fetch('https://pokeapi.co/api/v2/pokemon/2')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error('fetch failed!', err));
