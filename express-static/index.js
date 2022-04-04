const express = require('express');
const path = require('path');
const app = express();

const join = path.join(__dirname, 'public');
// console.log(join);

const staticValue = express.static(join);
// console.log(staticValue);

app.use('/public', staticValue);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000!');
});
