const fs = require('fs');

// asynchronously reading the contents of the file
// and encoding it using the utf8 character set
fs.readFile(process.argv[2], 'utf-8', (err, data) => {
  if (err) {
    // if there is an error
    console.error(err); // write the error to the process's stderr
    process.exit(1); // forcibly quit with a failure code(not 0) & not necessary
  }
  console.log(data); // otherwise print the file content to stdout
});
