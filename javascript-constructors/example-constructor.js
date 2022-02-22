function ExampleConstructor() {

}

console.log(ExampleConstructor.prototype);
console.log(typeof (ExampleConstructor.prototype));

const example = new ExampleConstructor();
console.log(example);

console.log(example instanceof ExampleConstructor);
