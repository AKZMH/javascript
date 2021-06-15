// задание 1

let a = 0;

while (a < 100) {
    if (IsNum(a)) {
        console.log(a);
    }
    a++
}

function IsNum(num) {
    if (num < 2) {
        return false;
    }

    for (let a = 2; a <= Math.sqrt(num); a++) {
        if (num % a === 0) {
            return false;
        }
    }
    return true;
}

// задание 2 + 3

const basket = [
    ['компьютер', 99000, 2],
    ['клавиатура', 3000, 1],
];


function countBasketPrice(basket) {
    let totalPrice = 0;
    for (let i = 0; i < basket.lenght; i++) {
        totalPrice += basket[i][1] * basket[i][2];
    }
    return totalPrice;
}

console.log(countBasketPrice(basket));


// задание 4
for (let a = 0; a < 10; console.log(a++)) { };

