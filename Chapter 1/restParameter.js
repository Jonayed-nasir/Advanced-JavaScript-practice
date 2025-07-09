// ?JavaScript Rest Parameters

// function fn(a, b, c, ...args) {
//   console.log(a, b, c , ...args);
// }

// fn(1, 2, 3, 5, 6,7,8,9);

// function fun(a, b, ...arge){
//     console.log(a, b, ...arge)
// }
// fun(1, 2, 3, 4)

// function fn(a, b, ...args) {
//   console.log('a =', a);
//   console.log('b =', b);
//   console.log('args =', ...args);
// }
// fn(1, 2, 3, 'A', 'B', 'C');

// function fn(a, b, ...args) {
//   console.log('a =', a);
//   console.log('b =', b);
//   console.log('args =', args);
// }
// fn(1, 2);

// function sumAll(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sumAll(2,4,6));
// console.log(sumAll(1,3,5,7,9))

// console.log(evenSum(1, 2, 4, 6, 5, 3));

// function sumEven(...nums) {
//   return nums.filter((n) => n % 2 === 1).reduce((total, num) => total + num, 0);
// }

// console.log(sumEven(1, 2, 3, 4, 5, 6)); // ➜ 12
// console.log(sumEven(7, 9, 13)); // ➜ 0
// console.log(sumEven(10, 20, 30)); // ➜ 60

// function evenSum(...sum) {
//   return sum.filter((n) => n % 2 === 0).reduce((total, num) => total + num, 0);
// }
// console.log(evenSum(1,2,3,4,5,6,7))t

// function seHi(...arry) {
//   return arry.reduce((total, num) => total + num, 0);
// }

// console.log(seHi(1, 2, 3, 4, 5, 6, 7, 8, 9));
