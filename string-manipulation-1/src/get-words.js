/* exported getWords */
/*

input: string
output: array

- get the words in the string and put them in a new array.
  - make a storage for the list of words.
  - make a storage for the current word.
  - look at each character one at a time
    - if the input is empty, return an empty list.
    - if current character is not a space, add letter to current word.
    - if it is a space, add current word to the list of words
    - clear the current word.
  - add final word to the list of words.
  - return the storage for the list of words.

*/

function getWords(string) {
  var listOfWords = [];
  var currentWord = '';

  if (string === '') {
    return [];
  }

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentWord += string[i];
    } else {
      listOfWords.push(currentWord);
      currentWord = '';
    }
  }
  listOfWords.push(currentWord);
  return listOfWords;
}
