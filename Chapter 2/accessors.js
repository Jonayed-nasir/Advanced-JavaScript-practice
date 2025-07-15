// !JavaScript Object AccessorsJavaScript Object Accessors
//! Create an Object:

// const person = {
//   firatName: 'Jonayed',
//   lastName: 'Nasir',
//   age: 18,
//   language: 'EN',
//   get lang() {
//     return this.language;
//   },
// };

// console.log(person.lang)
// console.log(person.language)
// console.log(person)

// !JavaScript Setter (The set Keyword)

// const Info = {
//   firstName: 'Jonayed',
//   lastName: 'Nasir',
//   language: 'bg',
//   set lang(lang) {
//     return (this.language = lang);
//   },
// };

// Info.lang = 'en';
// console.log(Info.language);

// const student = {
//   name: 'jonayed',
//   scores: [80, 90, 95],

//   get average() {
//     let sum = this.scores.reduce((a, b) => a + b, 0);
//     return sum / this.scores.length
//   },
// };

// console.log(student.average);
// const car = {
//     brand: 'Toyota',
//     model: 'Corolla',
  
//     get carInfo() {
//       return this.brand + ' ' + this.model;
//     },
  
//     set carInfo(info) {
//       const parts = info.split(' ');
//       this.brand = parts[0];
//       this.model = parts[1];
//     },
//   };
  
//   car.carInfo = 'Honda Civic';
  
//   console.log(car.carInfo); // Output: Honda Civic
  