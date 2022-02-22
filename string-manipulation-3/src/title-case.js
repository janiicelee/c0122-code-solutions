/* exported titleCase */
/*

input: string
output: string

- make the letters all lowercased split the sentence into words.
- make a storage for the minor words => and, or, nor, but, a, an, the, as, at, by, for, in, of, on, per, to
- loop over the string and add each titlecased letter to the new storage
  - make sure that JavaScript and API and Web is always in that format.
  - make sure that if there is a '-', make the next letter after that be uppercased.
  - If there is a ':' after a word, make the next word's first letter capitalized.
  - make sure that the words of four letters or more are capitalized.
  - make the rest of the letters except for the uppercased letter is lowercased
  - make sure that the minor words are lowercased.
  - make sure that words of three letters or fewer are lowercased
- concatenate the letters into a word => final title.

*/

function titleCase(title) {
  var words = title.toLowerCase().split(' ');
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  for (var i = 0; i < words.length; i++) {
    if (words[i] === 'javascript') {
      words[i] = 'JavaScript';
    } else if (words[i] === 'api') {
      words[i] = 'API';
    } else if (words[i] === 'web') {
      words[i] = 'Web';
    } else if (words[i] === 'javascript:') {
      words[i] = 'JavaScript:';
    } else {
      if (words[i].includes('-')) {
        var hyphen = words[i].split('-');
        for (var j = 0; j < hyphen.length; j++) {
          hyphen[j] = hyphen[j][0].toUpperCase() + hyphen[j].slice(1);
        }
        words[i] = hyphen.join('-');
      } else if (minorWords.indexOf(words[i]) === -1) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
      } else if (words[i].length > 4) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
      } else if (i === 0) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
      } else if (words[i - 1].includes(':')) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
      }
    }
  }

  return words.join(' ');
}
