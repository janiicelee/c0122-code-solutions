const fs = require('fs');
const dataJson = require('./data.json');

if (process.argv[2] === 'read') {
  for (const i in dataJson.notes) {
    console.log(i + ': ' + dataJson.notes[i]);
  }
}

if (process.argv[2] === 'create') {

  dataJson.nextId++;
  dataJson.notes[dataJson.nextId] = process.argv[3];

  fs.writeFile('data.json', JSON.stringify(dataJson, null, 2), err => {
    if (err) throw err;

  });
}

if (process.argv[2] === 'delete') {

  delete dataJson.notes[process.argv[3]];

  fs.writeFile('data.json', JSON.stringify(dataJson, null, 2), err => {
    if (err) throw err;

  });
}

if (process.argv[2] === 'update') {
  dataJson.notes[process.argv[3]] = process.argv[4];

  fs.writeFile('data.json', JSON.stringify(dataJson, null, 2), err => {
    if (err) throw err;

  });
}
