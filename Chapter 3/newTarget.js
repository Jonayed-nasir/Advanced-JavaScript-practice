// ?Introduction to JavaScript new.target Metaproperty

// function myFunc() {
//   if (!new.target) {
//     throw new Error('myFunc must be called with new');
//   }

//   console.log('Constructor called with new');
// }

// new myFunc();
// myFunc()

// function User(name) {
//   if (!new.target) {
//     return new User(name);
//   }
//   this.name = name;
// }

// const u1 = User('Jonayed')
// console.log(u1.name)

// class Base {
//   constructor() {
//     console.log(new.target.name);
//   }
// }

// class Child extends Base {}

// new Base();
// new Child();

// function account() {
//   if (!new.target) {
//     throw new Error('account must be called with new');
//   }

//   console.log('Account created');
// }

// new account();
// account();