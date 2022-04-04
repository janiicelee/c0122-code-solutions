const express = require('express');
const path = require('path');
const app = express();

const join = path.join(__dirname, 'public');
// console.log(join);

// function createStaticMiddleware(directoryPath) {

//   return (req, res, next) => {
//     const filepath = req.url;
//     const absoluteFilePath = path.join(directoryPath, filepath);
//     fs.readFile(absoluteFilePath, 'utf8', (err, fileContent)=> {
//       if(err) {
//         next(err);
//       } else {
//         res.send(fileContent);
//       }
//     });
//     //find out what is being requested
//     // try to read that file that's being requested
//     // respond to the client with the file contents
//   };
// }

const staticValue = express.static(join);
// console.log(staticValue);

app.use(staticValue);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000!');
});
