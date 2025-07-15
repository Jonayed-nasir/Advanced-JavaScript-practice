//? JavaScript Class Expreession

// let person = class {
//   constructor(name, gmail, password) {
//     this.name = name;
//     this.gmail = gmail;
//     this.password = password;
//   }
// };

// let inFormation = new person('Jonayed', 'jonayed@gmail.com', 'password123');
// console.log(typeof inFormation);

// !🎯 ৬. Real-Life Use Case: Dynamic Class js Copy code

// function createPersonClass(role) {
//   if (role === 'admin') {
//     return class {
//       constructor(name) {
//         this.name = name;
//         this.role = 'admin';
//       }
//     };
//   } else {
//     return class {
//       constructor(name) {
//         this.name = name;
//         this.role = 'user';
//       }
//     };
//   }
// }

// const Admin = createPersonClass('admin');
// const User = createPersonClass('user');

// const a1 = new Admin('Jonayed');
// const u1 = new User('Rafi');

// console.log(a1);
// console.log(u1);

// !JavaScript Functions are First-Class Citizens

// function add(a, b) {
//   return a + b;
// }

// let sum = add;
// console.log(sum(4, 6));

// function average(a, b, fn) {
//   return fn(a, b) / 2;
// }

// let d = average;
// console.log(d(10, 20, sum));

// function callMeBack(callback) {
//   console.log('Calling callback...');
//   callback();
// }

// callMeBack(function () {
//   console.log('I am inside callback!');
// });

// function multiplyBy(n) {
//   return function (x) {
//     return x * n;
//   };
// }

// const double = multiplyBy(3)
// console.log(double(5))
