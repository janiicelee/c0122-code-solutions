/* exported numVowels */
/*

- input: string
- output: number

- initialize a number
- check how many vowels are in the string
- increment the number whenever there's a vowel

*/

function numVowels(string) {
  var number = 0;
  var lower = string.toLowerCase();

  for (var i = 0; i < string.length; i++) {
    if (lower[i] === 'a' || lower[i] === 'e' || lower[i] === 'i' || lower[i] === 'o' || lower[i] === 'u') {
      number += 1;
    }
  }
  return number;
}
