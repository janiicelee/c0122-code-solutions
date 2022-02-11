var books = [
  {
    isbn: '#123',
    title: 'Harry Potter',
    author: 'Ellie'
  },
  {
    isbn: '#124',
    title: 'Star Wars',
    author: 'Anna'
  },
  {
    isbn: '#125',
    title: 'Bat Man',
    author: 'Tim'
  }
];

console.log('books:', books);
console.log('typeof books:', typeof (books));

console.log(JSON.stringify(books));

var student = '{"id":"123", "name": "Janice"}';
console.log('student:', student);
console.log('type of student:', typeof (student));

var obj = JSON.parse(student);
console.log('obj:', obj);
console.log('type of obj:', typeof (obj));
