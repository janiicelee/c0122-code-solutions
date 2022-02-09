/* exported capitalizeWords */
/*

- input: string
- output: string

- make the words all lowercased
- split the words by the spaces between -> will be an array
- make the first letter of each word uppercased
- make the rest of the letters lowercased
- concatenate the letters into a word
- do this with each word in the array and concatenate them as a sentect (like the original string)

*/

function capitalizeWords(string) {
  var splitString = string.toLowerCase().split(' ');

  for (var i = 0; i < splitString.length; i++) {
    splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
  }

  return splitString.join(' ');
}
