// // const {
// //   pbkdf2Sync,
// // } = require('node:crypto');
// // console.log("START SCRIPT");

// // var a = 200;
// // console.log(a);
// // const key = pbkdf2Sync('secret', 'salt', 2000000, 64, 'sha512');
// // console.log(key.toString('hex'));  // '3745e48...08d59ae'

// // function abc(){
// //     console.log('THIS IS FUNCITON')
// // }

// // abc();

// // const key2 = pbkdf2Sync('secret', 'salt', 2000000, 64, 'sha512');
// // console.log(key2.toString('hex'));  // '3745e48...08d59ae'

// // console.log("SOMEETHING")

// // const key3 = pbkdf2Sync('secret', 'salt', 2000000, 64, 'sha512');
// // console.log(key3.toString('hex'));  // '3745e48...08d59ae'


// // ASYNC

// // process.UV_THREADPOOL_SIZE =10;

// // const {
// //   pbkdf2,
// // } = require('node:crypto');

// // console.log("SOMETHING");

// // pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
// //   if (err) throw err;
// //   console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// // });

// // console.log("SOMETHING");

// // pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
// //   if (err) throw err;
// //   console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// // });

// // console.log("SOMETHING");

// // pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
// //   if (err) throw err;
// //   console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// // });

// // console.log("SOMETHING");

// // pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
// //   if (err) throw err;
// //   console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// // });
// // console.log("SOMETHING");

// // pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
// //   if (err) throw err;
// //   console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// // });
// // console.log("SOMETHING");

// // pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
// //   if (err) throw err;
// //   console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// // });
// // console.log("SOMETHING");

// // pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
// //   if (err) throw err;
// //   console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// // });
// // console.log("SOMETHING");
// // pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
// //   if (err) throw err;
// //   console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// // });
// // console.log("SOMETHING");

// // pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
// //   if (err) throw err;
// //   console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
// // });
// // console.log("SOMETHING");
//_______________________________________________________________________________________________________________________________________
//setImmediate n process.nextick
// var a =200;

// console.log(a);

// function hello(){
//     console.log("HELLO")
// }

// hello();

// var b =300;

// setImmediate(()=>{
//     console.log("SET IMMEDIATE")
// });

// console.log(b);
// console.log("END OF SCRIPT");

// process.nextTick(()=>{
//     console.log("THIS IS NEXT TICK")
// });

//____________________________________________________________________________________________________________________________


// SCENARIO 2: 

const https = require('node:https');
const fs = require('node:fs');
fs.readFile('./something.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

setTimeout(()=>{
    console.log("THIS IS SETTIMOUT")
},0)

https.get('https://encrypted.google.com/', (res) => {
    console.log("THIS IS API DATA")

}).on('error', (e) => {
  console.error(e);
});

setImmediate(()=>{
    console.log("SET IMMEDIATE")
})

setTimeout(()=>{
    console.log("THIS IS SETTIMOUT")
},0)

process.nextTick(()=>{
    console.log("NEXT TICK")
})

console.log("HELLOOOO")

process.nextTick(()=>{
    console.log("NEXT TICK 2")
})

