

let items = [ {
	name: "Dog",
	price: 40.50,
	count:0
	
}, {
	name: "Cat",
	price: 35.50,
	count:0
	
}, {
	name: "Lizard",
	price: 19.99,
	count:0
	
}, {
	name: "Fish",
	price: 9.99,
	count:0
	
}, {
	name: "Snake",
	price: 24.99,
	count:0
	
}, {
	name: "Lobster",
	price: 29.99,
	count:0
	
}, {
	name: "Platypus",
	price: 32.99,
	count:0
	
}, {
	name: "Chupacabra",
	price: 69.99,
	count:0
	
} ];

let list = document.getElementById("itemlist");

let shopping = [];

let cart = document.getElementById("cart");

	for (let i=0; i<items.length; i++){
		let it=items[i];
		list.insertAdjacentHTML("beforeend", "<li>"+items[i].name+ "- $" + 
				items[i].price + "<button type=\"button\" onclick = shopping.push("+
				JSON.stringify(items[i]) +")>Add</button></li>");
		
	}

function checkout(){
	cart.innerHTML="";
	let total = 0;
for (let i=0; i<shopping.length; i++){
	
		cart.insertAdjacentHTML("beforeend", "<li>"+shopping[i].name+ "- $" + 
				shopping[i].price+ "<button type=\"button\" onclick = shopping.splice("+
				i +",1)>Remove</button></li>");
		total+=shopping[i].price;
		}
	total = Math.floor(total*100)/100;
	
	
	cart.insertAdjacentHTML("beforeend", "<p> Cart Total: $" + 
		total+"</p>");

}

//let myList=document.getElementsByTagName("li");
//for (let i = 0; i<myList.length;i++){
//	let button = document.createElement("Button");
//	button.className="add";
//	button.onclick=addItem(myList[i]);
//	let txt=document.createTextNode("Add");
//	button.appendChild(txt);
//	myList[i].appendChild(button);
//	
//}
//
//let add = document.getElementsByClassName("add");
//for (let i = 0; i < add.length; i++) {
//	add[i].onclick = addItem(items[i]); 
// }


//
////Create a "close" button and append it to each list item
//var myNodelist = document.getElementsByTagName("LI");
//var i;
//for (i = 0; i < myNodelist.length; i++) {
//  var span = document.createElement("SPAN");
//  var txt = document.createTextNode("\u00D7");
//  span.className = "close";
//  span.appendChild(txt);
//  myNodelist[i].appendChild(span);
//}
//
//// Click on a close button to hide the current list item
//var close = document.getElementsByClassName("close");
//var i;
//for (i = 0; i < close.length; i++) {
//  close[i].onclick = function() {
//    var div = this.parentElement;
//    div.style.display = "none";
//  }
//}
//
//// Add a "checked" symbol when clicking on a list item
//var list = document.querySelector('ul');
//list.addEventListener('click', function(ev) {
//  if (ev.target.tagName === 'LI') {
//    ev.target.classList.toggle('checked');
//  }
//}, false);
