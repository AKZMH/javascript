'use strict'

// задание 1

// function convNum(num) {
//     if (!Number.isInteger(num) || num < 0 || num > 999) {
//         console.log('Введите число от 0 до 999 ');
//         return {};
//     }
//     return {
//         "единицы": num % 10,
//         "десятки": Math.floor(num / 10) % 10,
//         "сотни": Math.floor(num / 100),
//     };
// }

// console.log(convNum(567));


// задание 2

const basket = {
    items: [
        {
            product: 'Computer',
            price: 99000,
            quantity: 2,
        },
        {
            product: 'Keyboard',
            price: 3000,
            quantity: 1,
        }
    ],
    countBasketPrice() {
        return this.items.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0);
    }


    // эта не считает, не пойму почему(
    // countBasketPrice() {
    //     let totalPrice = 0;
    //     for (let i = 0; i < basket.lenght; i++) {
    //         totalPrice += items.price * items.quantity;
    //     }
    //     return totalPrice;
    // }
};

console.log(basket.countBasketPrice());



