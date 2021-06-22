const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Title</b>: ${good.product_name}</div>
                    <div><b>Price</b>: ${good.price}</div>
                    <div><b>guantity</b>: ${good.quantity}</div>
                    <div><b>Total</b>: ${good.quantity * good.price}</div>
        </div>`;
    }
}
const cart = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
    goods: [
        {
            id_product: 1,
            product_name: 'Laptop',
            price: 99000,
            quantity: 2,
        },
        {
            id_product: 2,
            product_name: 'Keyboard',
            price: 3000,
            quantity: 4,
        },
        {
            id_product: 3,
            product_name: 'Monitor',
            price: 15000,
            quantity: 1,
        },

    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-button');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `In cart ${this.goods.length} items Total price ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Your cart is empty';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
};

cart.init();