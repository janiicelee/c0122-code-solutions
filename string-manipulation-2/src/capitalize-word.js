/* exported capitalizeWord */
/*
- input: word
- output: word

- make the first letter uppercased in the given word
- Javascript is always cased as Javascript.

- create a new storage for the output.
- make all letters to lowercase
- convert the first letter to uppercase
- make an exception condition for the word 'Javascript'

*/

function capitalizeWord(word) {
  var newWord = '';

  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }

  newWord += word[0].toUpperCase();

  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }

  return newWord;
}
