//EVENT DELEGATION
console.log("START SCRIPT");

// const ListOfProducts=document.getElementById("ListOfProducts");
// ListOfProducts.addEventListener("click",(event)=>{
//     if(event.target.tagName==="li"){
//         console.log("CLICKED ON:",event.target.textContent);
//     }
// })

//LET'S ADD AN ELEMENT
// const newProduct=document.createElement("li");
// newProduct.textContent="Mobile Phone";
// ListOfProducts.appendChild(newProduct);

//ek ek letter pe chla rha 
// const searchBox=document.getElementById("searchHandle");
// searchBox.addEventListener("input",(event)=>{
//     console.log(event.target.value);
// })

//Debouncing
const searchBox = document.getElementById("searchHandle");
let timeoutId;//No data hiding and encapsulation
searchBox.addEventListener("input", (event) => {
  clearTimeout(timeoutId); 
  timeoutId = setTimeout(() => {
    console.log(event.target.value);
  },500); 
});
