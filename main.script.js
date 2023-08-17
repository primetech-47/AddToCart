let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Luis Vutton Bag',
        image: 'as-1.JPG',
        price: 5000
    },
    {
        id: 2,
        name: 'Black Boots',
        image: 'ass-2.JPG',
        price: 1200
    },
    {
        id: 3,
        name: 'Double laced sneakers',
        image: 'ass-4.JPG',
        price: 2200
    },
    {
        id: 4,
        name: 'Yellow Leather Bag',
        image: 'ass-9.JPG',
        price: 10000
    },
    {
        id: 5,
        name: 'Red female Shoes',
        image: 'ass-10.JPG',
        price: 3200
    },
    {
        id: 6,
        name: 'Black Gold Watch',
        image: 'as-29.JPG',
        price: 100000
    },
    {
        id: 7,
        name: 'White Boots',
        image: 'as-12.JPG',
        price: 1500
    }, {
        id: 8,
        name: 'Gold Tinted Watch',
        image: 'as-21.JPG',
        price: 1000000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
<img src="image/${value.image}">
<div class="title">${value.name}</div>
<div class="price">${value.price.toLocaleString()}</div>
<button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
<div><img src="image/${value.image}"/></div>
<div>${value.name}</div>
<div>${value.price.toLocaleString()}</div>
<div>
<button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
<div class="count">${value.quantity}</div>
<button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
</div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


