// let message = true;

// let myPromise = new Promise((resolve, reject) => {
//   if (message) {
//     resolve([
//       { username: 'Jonayed', age: 18, country: 'BD' },
//       { username: 'jobayer', age: 21, country: 'BD' },
//     ]);
//   } else {
//     reject('you are not banglaseshi, so get out from here');
//   }
// });

// myPromise.then((success) => {
//   console.log(success);
// });

// myPromise.catch((error) => {
//   console.log(error);
// });

// const p2 = new Promise((resolve, reject) => {
//   resolve('❌ কিছু একটা ভুল হয়েছে!');
// });

// p2.then((success) => {
//   console.log(success);
// });

const download = new Promise((resolve, reject) => {
  console.log('Downloading file...');

  setTimeout(() => {
    resolve('✅ File downloaded!');
  }, 3000);
});

download.then((msg) => {
  console.log(msg);
});

const step1 = new Promise((resolve, reject) => {
  resolve('Step 1 Done');
});

step1.then((res) => {
  console.log(res);
  return 'Step 2 Done';
});
