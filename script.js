// This is the boilerplate code given for you
// You can modify this code
// Product data

if (!sessionStorage.getItem('cart')) {
  sessionStorage.setItem('cart', JSON.stringify([]));
}
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartlist=document.getElementById("cart-list");
document.getElementById("clear-cart-btn").addEventListener('click',clearCart);
const add=document.getElementById("");
// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" 
	data-id="${product.id}" id="${product.id}")>Add to Cart</button>`;
    productList.appendChild(li);
	  document.getElementById(product.id).addEventListener('click',()=>addToCart(product.id));
	  console.log(product);
  });
}

// Render cart list
function renderCart() {
	cartlist.innerHTML=``;
	let cart=JSON.parse(sessionStorage.getItem('cart'));
	cart.forEach((product)=>{
		let btnid="remove-btn-"+product.id;
		let ele=document.createElement("li");
	 ele.innerHTML=`${product.name} - ${product.price}
	  <button onclick="removeFromCart(${product.id})">Remove</button>`;
		
		// document.getElementById(btnid).
		// 	addEventListener('click',()=>removeFromCart(product.id));
	 cartlist.appendChild(ele);
	})
	
	
}

// Add item to cart
function addToCart(productId) {
	const productToAdd = products.find((product) => product.id === productId);
	let list=JSON.parse(sessionStorage.getItem('cart'));
	list.push(productToAdd);
	sessionStorage.setItem('cart',JSON.stringify(list));
	renderCart();
	
}

// Remove item from cart
function removeFromCart(productId) {
	
	let list=JSON.parse(sessionStorage.getItem('cart'));
	let newlist=[], found=false;
	list.forEach(product=>{
		if(product.id!=productId || found==true) newlist.push(product);
		else found=true;
	})
	sessionStorage.setItem('cart',JSON.stringify(newlist));
	renderCart();
}

// Clear cart
function clearCart() {
	sessionStorage.setItem('cart',JSON.stringify([]));
	renderCart();
}

// Initial render
renderProducts();
renderCart();
