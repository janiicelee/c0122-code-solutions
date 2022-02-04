/* exported capitalize */

/*

- make the first letter uppercased and the rest  of the letters be lowercased.
  - input: string
  - output: string

- if there's only one character, make it all uppercased.
- if there's more than one character, make the first character uppercased and the rest lowercased.
  - look at each letter one at a time.
  - create a new storage for the modified letters.
  - put the letters in the storage once they have changed.
  - return the new storage.

*/

function capitalize(word) {
  var newWord = '';

  newWord += word[0].toUpperCase();

  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }

  return newWord;
}
