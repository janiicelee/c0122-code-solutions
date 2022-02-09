var student = {
  firstName: 'Janice',
  lastName: 'Lee',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'python developer';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Kia',
  model: 'forte',
  year: 2022
};

vehicle.color = 'gray';
vehicle.isConvertible = true;

console.log('value of vehicle.color:', vehicle.color);
console.log('value of isConvertible:', vehicle.isConvertible);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'molly',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
