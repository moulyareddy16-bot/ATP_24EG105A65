/* ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website. */


const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];


//filter instock products only
const instockProducts=cart.filter((cartObj)=>cartObj.inStock===true);
console.log("instock products are: ",instockProducts);

//map to create a new array with: {name,totalPrice}
const newArr=cart.map((cartObj)=>{
    return {name: cartObj.name, price: cartObj.price};
}
);
console.log("new array with name and price is: ",newArr); 

//reduce to cal grand total
const grandTotal=cart.reduce((acc,cartObj)=>acc+cartObj.price,0);
console.log("grand total is: ",grandTotal);

//find the details of mouse
const mouse=cart.find(cartObj=>cartObj.name==="Mouse");
console.log("details of mouse: ",mouse);

//findindex of position of keyboard
const keyboard_index=cart.findIndex(cartObj=>cartObj.name==="Keyboard");
console.log("the index of keyboard is: ",keyboard_index);

