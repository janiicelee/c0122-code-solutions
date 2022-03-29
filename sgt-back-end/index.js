const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

// GET grades
app.get('/api/grades', (req, res, next) => {

  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

// CREATE grades
app.post('/api/grades', (req, res, next) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);

  if (!req.body) {
    res.status(400).json({
      error: 'Input appropriate fields'
    });
    return;
  }

  if (!name) {
    res.status(400).json({
      error: 'The name field is required'
    });
    return;
  }

  if (!course) {
    res.status(400).json({
      error: 'The course field is required'
    });
    return;
  }

  if (!score) {
    res.status(400).json({
      error: 'The score field is required'
    });
    return;
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;

  const params = [name, course, score];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });

});

// UPDATE a grade
app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);

  if (gradeId < 0) {
    res.status(400).json({
      error: 'gradeId should be a positive integer'
    });
    return;
  }

  if (!req.body) {
    res.status(400).json({
      error: 'Input appropriate fields'
    });
    return;
  }

  if (!name) {
    res.status(400).json({
      error: 'The name field is required'
    });
    return;
  }

  if (!course) {
    res.status(400).json({
      error: 'The course field is required'
    });
    return;
  }

  if (!score) {
    res.status(400).json({
      error: 'The score field is required'
    });
    return;
  }

  const sql = `
    update "grades"
    set "name" = $1,
        "course" = $2,
        "score" = $3
    where "gradeId" = $4
    returning *
    `;

  const params = [name, course, score, gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: 'There is no matching grade'
        });
      } else {
        res.status(200).json(grade);
      }
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

// DELETE a grade
app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);

  if (gradeId < 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }

  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *
    `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: 'There is no matching grade'
        });
      } else {
        res.status(204).json(grade);

      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    });
});
