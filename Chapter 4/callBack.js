//! JavaScript callBack function

// function displayer(userdata) {
//   console.log(userdata);
// }

// function user(firstName, lastName, prof, age) {
//   firstName;
//   lastName;
//   prof;
//   age;
//   let userData = `${firstName} ${lastName} ${prof}, ${age}`;
//   return userData;
// }

// let user1 = user('Jonayed', 'Nasir', 'Software Engineer', 25);
// displayer(user1)

// ✅ Example 1: Simple Callback
// function greet(name, callback) {
//   console.log(`Hi, ${name}!`);
//   callback();
// }

// function sayBye() {
//   console.log('Goodbye');
// }

// greet('Jonayed', sayBye);

// function processData(data, callback) {
//   console.log('Processing data:', data);
//   callback();
// }

// processData('JavaScript', () => {
//   console.log('Done!');
// });

// const numbers = [1, 2, 3];

// numbers.forEach(function (num) {
//     console.log(num * 2)
// });

// function downloadFile(filename, callback) {
//   console.log(`Downloading ${filename}...`);
//   setTimeout(() => {
//     console.log(`${filename} downloaded successfully!`);
//     callback();
//   }, 3000);
// }

// downloadFile('data.json', () => {
//   console.log('New processing the file...');
// });

// 🧪 Practice Challenge:

// function learn(name, callback) {
//   console.log(`Learning ${name}`);
//   callback();
// }

// learn('JavaScript', function () {
//   console.log('From Programming Hero!');
// });
