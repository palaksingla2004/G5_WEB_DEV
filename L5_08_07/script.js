// console.log("START SCRIPT");

// const myPromise = new Promise((resolve,reject)=>
// {
//     setTimeout(()=>
//     {
//         ("Placement done");
//         //reject("Placement not done");
//     },3000);
// });
// //console.log(myPromise);---->gives status pending

// //Error Handling
// myPromise
// .then((res)=>console.log((res)))
// .catch((err)=>console.log((err)));

//can't use multiple then with promise coz they don't run in order of setTimeout and gives output in random order

 //______________________________________________________________________________________________________________________-
// console.log("START SCRIPT");

// function placement(placementStep,delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Placement done"+placementStep);
//       console.log(""+placementStep);
//     }, delay);
//   });
// }
// placement("Got the Placement",5000)
// .then(()=>placement("Party Time",3000))
// .then(()=>placement("Working",4000))
// .then(()=>placement("Layoff",1000))
// .catch((err)=>console.log(err));


//_______________________________________________________________________________________________________________________________
//Promise API
const myPromise1 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        //resolve("1");
        reject("1");
    },1000);
});
const myPromise2 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        //resolve("2");
        reject("2");
    },2000);
});
const myPromise3 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("3");
    },3000);
});
const myPromise4 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("4");
    },4000);
});

// Promise.all([myPromise1, myPromise2, myPromise3, myPromise4])
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))

// Promise.allSettled([myPromise1, myPromise2, myPromise3, myPromise4])
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))

Promise.any([myPromise1, myPromise2, myPromise3, myPromise4])//----->gives whose delay is least
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

// Promise.race([myPromise1, myPromise2, myPromise3, myPromise4])
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))
