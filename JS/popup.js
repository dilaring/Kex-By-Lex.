function openPopup() {
  document.getElementById("myPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("myPopup").style.display = "none";
}



var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
modal.style.display = "block";
}


span.onclick = function() {
modal.style.display = "none";
}


window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}

const cartShopButton = document.querySelector('.cart-shop');
const popupCart = document.querySelector('#myPopupcart');
const closeButton = popupCart.querySelector('.close');

function openPopup() {
popupCart.style.display = 'block';
}

function closePopup() {
popupCart.style.display = 'none';
}

cartShopButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

