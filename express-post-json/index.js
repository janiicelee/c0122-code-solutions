const express = require('express');
const app = express();

let nextId = 1;

const grades = {};

app.get('/api/grades', (req, res) => {

  return res.status(201).json(Object.values(grades));

});

app.use(express.json());

app.post('/api/grades', (req, res) => {

  grades[nextId] = {
    id: nextId,
    course: req.body.course,
    name: req.body.name,
    score: parseInt(req.body.score)
  };
  nextId++;

  return res.json(grades[nextId - 1]);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000!');
});
