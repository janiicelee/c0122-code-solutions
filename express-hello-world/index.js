var express = require('express');
var app = express();

app.use(function (req, res) {
  // console.log(req.method);
  res.send('helloo');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000!');
});
