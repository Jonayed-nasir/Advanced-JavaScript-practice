// ?bject Literal Syntax Extensions in ES6

// const name = 'Jonayed';
// const age = 18;

// const student = {
//   name, // মানে: name: name
//   age, // মানে: age: age
// };

// console.log(student.name);
// Output: { name: "Jonayed", age: 18 }

// function f(names, age) {
//   console.log(names, age);
// }

// f('Jonayed', 18)

// let Output = f(18, 28);
// console.log(Output);

// const name = 'Jonayed';
// const age = 18;

// const student = {
//   [name]: 'Nasir',
//   [age]: '20'
// };

// console.log(student)

// !🧪 ১️⃣ Shorthand Property Example:js￼Copy code

// const calculator = {
//   add(a, b) {
//     return a + b;
//   },
// };

// console.log(calculator.add(1.5, 9));

// !আগে লিখতে হতো:

// const calculator1 = {
//   add: function (a, b) {
//     return a + b;
//   },
// };

// !🧪 ৩️⃣ Computed Property Names: js ￼Copy code

// const key = 'favLangualge';
// const developer = {
//   name: 'Jonayed',
//   [key]: 'JavaScript',
// };

// console.log(developer);

// const name = 'Jonayed';
// const city = 'Dhaka';

// const user = {
//   name,
//   city,
//   greet() {
//     return `Hi ${this.name} from ${this.city}`;
//   },
// };

// console.log(user.greet());

// *🤔 Challenge for You:

// let hobby = 'coding';

// let person = {
//   [hobby]: true,
//   sayHobby(){
//     return `I love ${hobby}`
//   }
// };

// console.log(person.sayHobby())

// Computed property name

// let prefix = 'machine ';
// let machine = {
//   [prefix + 'name']: 'server',
//   [prefix + 'hours']: 10000,
// };

// console.log(machine['machine name']);
// console.log(machine['machine hours']);
// console.log(machine);

