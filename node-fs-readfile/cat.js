const fs = require('fs');

const arr = [];

for (let i = 2; i < process.argv.length; i++) {
  fs.readFile(process.argv[i], 'utf-8', (err, data) => {
    if (err) {

      console.error(err);
      process.exit(1);
    }
    console.log(data);
  });
  arr.push(i);
}
