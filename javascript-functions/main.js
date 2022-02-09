function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

function greet(name) {
  return 'Hey, ' + name;
}

function getArea(width, height) {
  return width * height;
}

function getFirstName(person) {
  return person.firstName;
}

function getLastElement(array) {
  return array[array.length - 1];
}

convertMinutesToSeconds(5);
greet('Janice');
getArea(17, 24);
getFirstName({ firstName: 'Janice', lastName: 'Lee' });
getLastElement(['dog', 'and', 'cat']);
