
function multiply(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== 'number') {
        return 'Please provide a number'
    }
    const multi = num1 * num2;
    return multi;
}

// const result = multiply(4,4);
// console.log(result)


function fullName(first, last) {
    if (typeof first !== 'string') {
        return 'First name should be a string'
    }
    else if (typeof last !== 'string') {
        return 'Last name should be a string'
    }
    const fullN = first + ' ' + last;
    return fullN
}

const result = fullName(3, 'akter');
// console.log(result);


function getPrice(product) {
    if (typeof product !== "object") {
        return 'Please provide a object'
    }
    const price = product.price;
    return price;
}

const price = getPrice({ name: 'molom', price: 56 });
// const price = getPrice(67);
// console.log(price);


function getSecond(array) {
    if (Array.isArray(array) === false) {
        return 'Please provide an array'
    }
    const second = array[1];
    console.log(second)
}

const second = getSecond('[12, 34, 56, 78]');
console.log(second);