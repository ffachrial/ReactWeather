var names = ['Firman', 'Rishad', 'Danica', 'Naveen'];

names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Firman'));

var person = {
  name: 'Grace',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' say hi to ' + name)
    });
  }
};

person.greet();

// Challenge Area
function add (a, b) {
  return a + b;
};

console.log(add(1, 3));
console.log(add(9, 0));

// addStatement
var addStatement = (a, b) => {
  return a + b;
};

console.log(addStatement(2, 3));

// addExpression
var addExpression = ((a, b) => a + b);

console.log(addExpression(5, 5));
