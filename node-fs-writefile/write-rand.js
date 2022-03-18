const fs = require('fs');

const data = JSON.stringify(Math.random());

fs.writeFile('random.txt', data, err => {
  if (err) throw err;
  return parseInt(data);
});
