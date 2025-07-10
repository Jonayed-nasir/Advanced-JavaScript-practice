// ?JavaScript for…of Loop

// const fruites = ['apple', 'bananna', 'mango'];

// for (let i = 0; i < fruites.length; i++) {
//   console.log(fruites[i]);
// }

// let scores = [54, 34, 34, 55];

// for (let score of scores) {
//   console.log(score);
// }

// let scores = [80, 90, 70];

// for (let score of scores) {
//   score += 5;
//   console.log(score);
// }

// let colors = ['Red', 'Green', 'Blue'];

// for (const [index, color] of colors.entries()) {
//   console.log(`${color} is at index ${index}`);
// }

//* 2) In-place object destructuring with for…of

// const ratings = [
//   { userNmae: 'Jonayed', info: 'fuondar of New Part Tech' },
//   { userNmae: 'Jobayer', info: 'fuondar of New Part' },
//   { userNmae: 'Monir', info: 'ceo of new part' },
// ];

// for (const { userNmae, info } of ratings) {
//   console.log(userNmae, info);
// }


// const ratings = [
//   {user: 'John',score: 3},
//   {user: 'Jane',score: 4},
//   {user: 'David',score: 5},
//   {user: 'Peter',score: 2},
// ];

// let sum = 0
// for (const {score} of ratings){
//   sum += score
// }

// console.log(`Total scores: ${sum}`)