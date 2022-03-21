const express = require('express');
const app = express();

const fs = require('fs');
const dataJson = require('./data.json');

app.get('/api/notes', (req, res) => {

  return res.status(200).json(Object.values(dataJson.notes));

});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (id < 0) {
    return res.status(400).json({ error: 'id must be a positive integer' });
  }

  if (dataJson.notes[id] !== undefined) {
    return res.status(200).json(dataJson.notes[id]);
  } else {
    return res.status(404).json({ error: `cannot find note with id ${id}` });
  }

});

app.use(express.json());

app.post('/api/notes', (req, res) => {

  const nextId = dataJson.nextId;
  dataJson.nextId++;

  if (!req.body.content) {
    return res.status(400).json({ error: 'content is a required field' });
  }

  dataJson.notes[nextId] = {
    content: req.body.content,
    id: nextId
  };

  fs.writeFile('./data.json', JSON.stringify(dataJson, null, 2), err => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An unexpected error occurred.' });
    } else {
      return res.status(201).json(dataJson.notes[nextId]);
    }
  });

});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (id < 0) {
    return res.status(400).json({ error: 'id must be a positive integer.' });
  }

  if (dataJson.notes[id] === undefined) {
    return res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    delete dataJson.notes[id];
  }

  fs.writeFile('./data.json', JSON.stringify(dataJson, null, 2), err => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An unexpected error occurred.' });
    } else {
      return res.sendStatus(204);
    }
  });

});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);

  if (id < 0) {
    return res.status(400).json({ error: 'id must be a positive integer.' });
  }

  if (dataJson.notes[id] === undefined) {
    return res.status(404).json({ error: `cannot find note with id ${id}` });
  }

  if (!req.body.content) {
    return res.status(400).json({ error: 'content is a required field' });
  }

  dataJson.notes[id] = {
    content: req.body.content,
    id: id
  };

  fs.writeFile('./data.json', JSON.stringify(dataJson, null, 2), err => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An unexpected error occurred.' });
    } else {
      return res.status(200).json(dataJson.notes[id]);
    }
  });

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000!');
});
