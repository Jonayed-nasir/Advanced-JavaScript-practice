// !JavaScript Arrow Functions

// let add = function (x, y) {
//   return x + y;
// };

// console.log(add(20, 30));

// let add = (x, y) => x + y;
// console.log(add(30, 30));

// let greetUser = (name) => `Hello, ${name}`;
// console.log(greetUser('Jonayed'))

// let makeFullName = (firstName, lastName) => `Full Name: ${firstName} ${lastName}`
// console.log(makeFullName('Jhankar', 'Mahbub'));

// ?call method

// const perosn = {
//   fullName: function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// const perosn1 = {
//   firstName: 'Jonayed',
//   lastName: 'Nasir',
// };

// perosn.fullName.call(perosn1);

// function sayHi() {
//   console.log(`Hi I'm ${this.name}`);
// }

// const perosn = {
//   name: 'Jonayedf',
// };

// sayHi.call(perosn)

// function introduce(language, batch) {
//   console.log(`I'm ${this.name}, learnig ${language} in ${batch}`);
// }

// const perosn = {
//   name: 'Jonayed',
// };

// introduce.call(perosn, 'JavaScript', 'Batch 4 in Hablu programmers');

// function showDetails(subject, platform) {
//   console.log(`I am ${this.name}, teaching ${subject} at ${platform}`);
// }

// const perosn = {
//   name: 'Jhankar',
// };

// showDetails.call(perosn, 'JavaScript', 'Programming Hero');

// ?apply() method

// function showDetails(subject, platform) {
//   console.log(`I am ${this.name}, teaching ${subject} at ${platform}`);
// }

// const teacher = {
//   name: 'Eshan Ahamed Ahad',
// };

// showDetails.apply(teacher, ['JavaScript', 'Hablu Programmer Batch 4']);

// const numbers = [3, 5, 7, 99, 11];

// const max = Math.max.apply(null, numbers);
// console.log(max)

//? bind() method

// const student = {
//   name: 'Jonayed',
// };

// function sayHi(language) {
//   console.log(`I'm ${this.name}, leanrning ${language}`);
// }

// const boundHello = sayHi.bind(student, 'JavaScript')

// boundHello()

// const teacher = {
//   name: 'Eshan',
//   subject: 'JavaScript',
//   greet: function () {
//     console.log(`Hello, I'm ${this.name} I teach ${this.subject}`);
//   },
// };

// const greetFunc = teacher.greet.bind(teacher);

// setTimeout(greetFunc, 3000);
