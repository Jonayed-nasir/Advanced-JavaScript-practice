// ?JavaScript Destructuring

// const person = {
//   firstName: 'Jonayed',
//   lastName: 'Nasir',
//   age: 18,
// };

// let { firstName, lastName } = person;
// console.log(firstName, lastName);

//? defolt peramitear

// const person = {
//   firstName: 'Jonayed',
//   lastName: 'Nasir',
//   age: 18,
// info: 'fundar of new part tech'
// };

// let { firstName, lastName, info='at new part' } = person;

// console.log(firstName, lastName, info);

// ?String Destructuring
//
// let str = 'Jonayed Nasir At A New Part Tech';
//
// let [a, b, c, d] = str;
// console.log(a, b, c, d);

//? Array Destructuring

// let arr = ['Jonayed', 'Shahed', 'Monir'];

// let [name1, name2, nam] = arr;
// console.log(name1, name2, nam);

// const [first, , third] = [1, 2, 3];
// console.log(first); // 1
// console.log(third); // 3

// function showUser({ name, age }) {
//     console.log(`${name} is ${age} years old.`);
//   }

//   showUser({ name: "Nasir", age: 18 }); // ✅

const student = {
  fullName: 'Tefheema',
  batch: 'Hero-2025',
  language: 'JavaScript',
};

let { fullName, language } = student;
console.log(fullName, language);

const teacher = {
  name: 'Jhankar Mahbub',
  subject: 'JavaScript',
  platform: 'Programming Hero',
};

let {name, platform} = teacher

console.log(name, platform)