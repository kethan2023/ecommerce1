// JavaScript to manage cart
document.addEventListener('DOMContentLoaded', function() {
    const cart = {
        items: [],
        addItem: function(name, price) {
            this.items.push({ name, price });
            this.updateCartLink();
        },
        updateCartLink: function() {
            const cartLink = document.getElementById('cart-link');
            cartLink.textContent = `Cart (${this.items.length})`;
        }
    };

    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            cart.addItem(name, parseFloat(price));
        });
    });
});
