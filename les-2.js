
// /задание 3/ 

a = +prompt('введите первое число');
b = +prompt('введите второе число');

if (a > 0 && b > 0) {
    c = a - b;
    alert(`разность чисел равна ${c}`)
} else if (a < 0 && b < 0) {
    c = a * b;
    alert(`произведение чисел равно ${c}`)
} else {
    c = a + b;
    alert(`сумма чисел равна ${c}`)
}

// задание 4

let a = +prompt('введите число от 0 до 15');

switch (a) {
    case 1:
        console.log(a++);
    case 2:
        console.log(a++);
    case 3:
        console.log(a++);
    case 4:
        console.log(a++);
    case 5:
        console.log(a++);
    case 6:
        console.log(a++);
    case 7:
        console.log(a++);
    case 8:
        console.log(a++);
    case 9:
        console.log(a++);
    case 10:
        console.log(a++);
    case 11:
        console.log(a++);
    case 12:
        console.log(a++);
    case 13:
        console.log(a++);
    case 14:
        console.log(a++);
    case 15:
        console.log(a);
}

// задание 5 

function addition(a, b) {
    return a + b;
}

function substraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

// задание 6

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return addition(arg1, arg2);
        case 'вычитание':
            return substraction(arg1, arg2);
        case 'умножение':
            return multiplication(arg1, arg2);
        case 'деление':
            return division(arg1, arg2);
    }
}
