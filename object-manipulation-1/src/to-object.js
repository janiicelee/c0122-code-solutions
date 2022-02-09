/* exported toObject */
/*

- input: array containing two elements
- output: object

- return an object that has a key:value pair
- the key is the first element of the input array
- the value is the second element of the input array
- match the key with the first element and the value with the second element of the array
- store them in a new object literal

*/

function toObject(keyValuePair) {
  var object = {};

  object[keyValuePair[0]] = keyValuePair[1];

  return object;
}
