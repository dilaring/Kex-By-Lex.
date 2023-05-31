
//----------------  SCROLL  ------------------ 
window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.upward');
    scroll.classList.toggle("active", window.scrollY > 500)
})
function scrollTopTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

}

//-----------------------FILTRAREA----------------------------


function displayProducts(products) {
    const productList = document.getElementById('catalog');
    productList.innerHTML = '';


    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const productElement = document.createElement('div.catalog-item');
        if (products[i].addimage === "") {
            productElement.innerHTML = `
        <div class="catalog-item" id="${product.id}" data-category="${product.category}">
        <div class="product"><img src="${product.image}" alt="" class="product-img">
        <video src="${product.addvideo}" preload="auto" no-controls autoplay loop playsinline muted
                class="product-add"></video>    
                  
        </div>
        <div class="product-content">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}
            </p>
        </div>
        <div class="product-bottom">
            <span class="product-price-value">${product.price}lei</span>
            <span class="product-cart" onclick="addToCart(event)"><span class="material-symbols-outlined">
                    add_shopping_cart
                </span></span>
    
        </div>
      `;
        }
        else {
            productElement.innerHTML = `
      <div class="catalog-item" id="${product.id}" data-category="${product.category}">
      <div class="product"><img src="${product.image}" alt="" class="product-img">
        <img src="${product.addimage}" alt="" class="product-add"> 
                
      </div>
      <div class="product-content">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-description">${product.description}
          </p>
      </div>
      <div class="product-bottom">
          <span class="product-price-value">${product.price}lei</span>
          <span class="product-cart" onclick="addToCart(event)"><span class="material-symbols-outlined">
                  add_shopping_cart
              </span></span>
  
      </div>
    `;
        }

        productList.appendChild(productElement);
    }
}


displayProducts(products);


// --------------SEARCH------------------
function searchProducts(query) {

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));

    displayProducts(filteredProducts);
}


const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', event => {
    const query = event.target.value;
    searchProducts(query);
});


displayProducts(products);




function filterProductsByCategory(category) {

    if (category === 'all') {
        displayProducts(products);
    } else {

        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

const sortByElement = document.getElementById('sort-by');
sortByElement.addEventListener('change', () => {
    const sortByValue = sortByElement.value;

    switch (sortByValue) {
        case 'price-asc':
            sortByPriceAsc();
            break;
        case 'price-desc':
            sortByPriceDesc();
            break;
        case 'name-asc':
            sortByNameAsc();
            break;
        case 'name-desc':
            sortByNameDesc();
            break;
        default:
            displayProducts(products);
    }
});


function sortByPriceAsc() {
    const sortedProducts = products.sort((a, b) => a.price - b.price);
    displayProducts(sortedProducts);
}

function sortByPriceDesc() {
    const sortedProducts = products.sort((a, b) => b.price - a.price);
    displayProducts(sortedProducts);
}


function sortByNameAsc() {
    const sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
    displayProducts(sortedProducts);
}


function sortByNameDesc() {
    const sortedProducts = products.sort((a, b) => b.name.localeCompare(a.name));
    displayProducts(sortedProducts);
}



function filterProductsByCategory(category) {

    if (category === 'all') {
        displayProducts(products);
    } else {

        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}
const categoryButtons = document.querySelectorAll('.category-button');
const sortForm = document.querySelector('#sort-form');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        if (category === 'all') {
            sortForm.classList.remove('hidden');
        } else {
            sortForm.classList.add('hidden');
        }
    });
});

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        filterProductsByCategory(category);


        categoryButtons.forEach(btn => {
            btn.classList.remove('is-active');
        });


        button.classList.add('is-active');
    });
});



displayProducts(products);




/////////////////////////////     COS    ///////////////////////////////////

let cart = [] || JSON.parse(localStorage.getItem('cart'));

function addToCart(event) {
    const productElement = event.target.closest('.catalog-item');
    const product = {
        id: productElement.dataset.id,
        image: productElement.querySelector('.product-img').src,
        name: productElement.querySelector('.product-title').textContent,
        price: parseFloat(productElement.querySelector('.product-price-value').textContent),
        quantity: 1,
    };
    const existingProductIndex = cart.findIndex(p => p.name === product.name);
    if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity++;
    } else {
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function addToCartWheelRes(num) {
    const product = {
        id: products[num].id,
        image: products[num].image,
        name: products[num].name,
        price: products[num].price,
        quantity: 1,
    };
    const existingProductIndex = cart.findIndex(p => p.name === product.name);
    if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity++;
    } else {
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}


function loadCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartUI();
}

loadCart();

function updateCartUI() {
    const cartElement = document.querySelector('.cart');
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart && savedCart.length > 0) {
        cart = savedCart;
    }
    cartElement.innerHTML = '';
    let totalFoodPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];

        const productElement = document.createElement('div');
        productElement.className = 'items-cart';
        productElement.innerHTML = `
                <div class="cart-item">
                    <img src="${product.image}" alt="" class="cart-item-img">
         
                   <div class="cart-item-quantity">
                        <button class="cart-quantity-btn minus">-</button>
                        <span class="cart-quantity">${product.quantity}</span>
                        <button class="cart-quantity-btn plus">+</button>
                    </div>  
                    <div class="cart-item-name">${product.name}</div>
                     <div class="cart-item-price">${product.price}lei </div>
                 </div>
                     
            
                    </div>
                 </div>`;
        totalFoodPrice += product.price * product.quantity;
        cartElement.appendChild(productElement);
    }
    const basketQuantityElement = document.querySelector('.basket-quantity');
    if (cart.length > 0) {
        basketQuantityElement.style.display = 'inline-block';
        basketQuantityElement.textContent = cart.length;
    } else {
        basketQuantityElement.style.display = 'none';
        basketQuantityElement.textContent = '0';
    }


    let deliveryPrice = totalFoodPrice >= 400 ? 0 : 35;
    let totalCartPrice = totalFoodPrice + deliveryPrice;

    const deliveryPriceElement = document.querySelector('.cart-delivery-price');
    deliveryPriceElement.textContent = `Доставка: ${deliveryPrice} lei`;

    const foodPriceElement = document.querySelector('.cart-food-price');
    foodPriceElement.textContent = `Заказ: ${totalFoodPrice} lei`;

    const totalCartPriceElement = document.querySelector('.cart-total-price');
    totalCartPriceElement.textContent = `Общая сумма: ${totalCartPrice} lei`;


}

function increaseProductQuantity(event) {
    const productElement = event.target.closest('.cart-item');
    const productIndex = cart.findIndex(p => p.name === productElement.querySelector('.cart-item-name').textContent);
    cart[productIndex].quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function decreaseProductQuantity(event) {
    const productElement = event.target.closest('.cart-item');
    const productIndex = cart.findIndex(p => p.name === productElement.querySelector('.cart-item-name').textContent);
    if (cart[productIndex].quantity > 1) {
        cart[productIndex].quantity--;
    } else {
        cart.splice(productIndex, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}



const cartElement = document.querySelector('.modal-content');
cartElement.addEventListener('click', event => {
    if (event.target.classList.contains('plus')) {
        increaseProductQuantity(event);
    }
    if (event.target.classList.contains('minus')) {
        decreaseProductQuantity(event);
    }
});

function calculateCartTotal() {
    let cartTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        cartTotal += product.price * product.quantity;
    }
    return cartTotal;
}
const cartTotal = calculateCartTotal();
const deliveryPrice = cartTotal > 400 ? 0 : 35;
const total = cartTotal + deliveryPrice;

document.querySelector('.cart-food-price').textContent = `Заказ: ${cartTotal} lei`;
document.querySelector('.cart-delivery-price').textContent = `Доставка: ${deliveryPrice} lei`;
document.querySelector('.cart-total-price').textContent = `Общая сумма: ${total} lei`;












