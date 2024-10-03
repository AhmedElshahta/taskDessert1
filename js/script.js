let yourcart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-product');
    const totalPrice = document.getElementById('total-price');

    cartItems.innerHTML = '';
    total = 0;

    cart.forEach((cartItem) => {
        const li = document.createElement('li');
        li.innerText = `${cartItem.item} - $${cartItem.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += cartItem.price;
    });

    totalPrice.innerText = total.toFixed(2);
}

document.getElementById('confirm-order').addEventListener('click', () => {
    alert(`Order confirmed! Total: $${total.toFixed(2)}`);
    cart = [];
    updateCart();
});
