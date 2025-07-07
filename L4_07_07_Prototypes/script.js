
//PROTOTYPES
//MAP
// console.log("START SCRIPT");
// let arr=[2,3,4,5,6];
// //const newArr=arr.map((x)=>{x*2});----->curly braces gives undefined coz Js expects a block body, and you must use return explicitly(one by one)
// const newArr=arr.map((x)=>x*2);
// console.log(newArr);

//MAP REPLICA
// let arr=[2,3,4,5,6];
// function doubleData(x){
//     return x*x;
// }
// Array.prototype.mapReplica=function(logic){
//     let outputArr=[];
//     for(let i=0;i<this.length;i++){
//         outputArr.push(logic(this[i]));
//     }
//     return outputArr;
// }
// const myprototypedata=arr.mapReplica(doubleData);
// console.log(myprototypedata);

//Filter
//const words=["hello","one","hundred"];
//const result=words.filter((word)=>word.length>2);
//const result=words.map((word)=>word.length>2);---->returns true or false 
//console.log(result);

//FILTER REPLICA
// const words=["hello","one","hundred"];
// function data(word){
//     return word.length>2;
// }
// Array.prototype.filterReplica=function(logic){
//     let outputArr=[];
//     for(let i=0;i<this.length;i++){
//         if(logic(this[i])){
//         outputArr.push(this[i]);
//     }
//  }
//     return outputArr;
// }
// const myprototypedata=words.filterReplica(data);
// console.log(myprototypedata);


//REDUCE
// const array1=[1,2,3,4];
// const initialValue=0;
// const sumwithInitial=array1.reduce(
//     (accumulator,currentValue)=>accumulator+currentValue,initialValue,
// );
// console.log(sumwithInitial);


//REDUCE REPLICA
const array1=[0,1,2,3,4];
function data(acc,curr){
    return acc+curr;
}
Array.prototype.reduceReplica=function(logic,iV){
    let output=iV;
    for(let i=0;i<this.length;i++){
        output=logic(output,this[i]);
 }
    return output;
}
const myprototypedata=array1.reduceReplica(data,0);
console.log(myprototypedata);