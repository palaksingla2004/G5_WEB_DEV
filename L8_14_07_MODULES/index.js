//In modules, Module is working as IIFE. Module is wrapped inside IIFE.(ignores scope)

console.log("START SCRIPT")
const{sumOfTwo,xy}=require("./calculateTwo/sumofTwo");
const subOfTwo=require("./calculateTwo/subOfTwo");
const mulOfTwo=require("./calculateTwo/mulOfTwo");
//console.log(xy);
var xy=3000;

//CALCULATOR
// function sumOfTwo(a,b){
//     console.log(a+b);
//     return a+b;
// }

// function subOfTwo(a,b){
//     console.log(a-b);
//     return a-b;
// }

// function mulOfTwo(a,b){
//     console.log(a*b);
//     return a*b;
// }
console.log("XY",xy);
sumOfTwo(10,20);
subOfTwo(50,10);
mulOfTwo(10,20);



//_________________________________________________________________________________________________________________
//SYNCHRONOUS
// var a =2;
// var b =30;

// function call(){
//     console.log("CALL FUNCITON")
// }

// console.log(a);
// call();
// console.log(b);


// //ASYNCHRONOUS

// setTimeout(()=>{
//     console.log("THIS IS SETTIMEOUT")
// },2000)

// setTimeout(()=>{
//     console.log("THIS IS SETTIMEOUT1")
// },2000)

// setTimeout(()=>{
//     console.log("THIS IS SETTIMEOUT2")
// },4000)

// setTimeout(()=>{
//     console.log("THIS IS SETTIMEOUT3")
// },3000)