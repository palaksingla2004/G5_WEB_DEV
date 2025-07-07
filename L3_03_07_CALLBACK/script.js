//CALLBACK
// console.log("START SCRIPT");
// function walkInRes(cb){
//     console.log("I'm going in the Restaurant.");
//     setTimeout(cb,3000);
// }
// function checkMenu(cb){
//     console.log("I'm checking Food Menu.");
//     setTimeout(cb,2000);
// }
// function orderFood(cb){
//     console.log("I'm ordering Food.");
//     setTimeout(cb,5000);
// }
// function havingLunch(cb){
//     console.log("I'm having Lunch.");
//     setTimeout(cb,6000);
// }
// function payBill(cb){
//     console.log("I'm paying Bill.");
//     setTimeout(cb,2000);
// }
// function walkOut(){
//     console.log("I had lunch and now I'm walking out.");
// } 

// walkInRes(()=>{
//     checkMenu(()=>{
//         orderFood(()=>{
//             havingLunch(()=>{
//                 payBill(()=>{
//                     walkOut();
//                 })
//             })
//         })
//     })
// })
// console.log("SOMETHING");
// console.log("SOMETHING");
// console.log("SOMETHING");




//Implement using Callback: 
//(i)var cart=["shoes,"clothes","watches"]
//fn createOrder(cart){3item*1000Rs(take the price n total no of order)}
//fn placeOrder(price & noofitem){generate order id n go to payment gateway}
//fn orderPayment(order,price,noofitem){place order}
//fn orderStatus(){All details}

var cart=["shoes","watches","clothes"]
function createOrder(cart,cb){
    let noOfItems = cart.length;
    let price = noOfItems * 1000;
    console.log("Order Created!");
    cb(price, noOfItems);
}
function placeOrder(price,noOfItems,cb){
    let orderId=Math.floor(Math.random()*1000);
    console.log("OrderId:",orderId);
    cb(orderId,price,noOfItems);
}
function orderPayment(orderId,price,noOfItems,cb){
    console.log("Payment is successful");
    cb(orderId,price,noOfItems);
}
function orderStatus(orderId,price,noOfItems){
    console.log("Order Details:");
    console.log("OrderID:",orderId);
    console.log("Total Items:",noOfItems);
    console.log("Total Price:",price);
}
createOrder(cart, function(price, noOfItems) {
    placeOrder(price, noOfItems, function(orderId, price, noOfItems) {
        orderPayment(orderId, price, noOfItems, function(orderId, price, noOfItems) {
            orderStatus(orderId, price, noOfItems);
        });
    });
});