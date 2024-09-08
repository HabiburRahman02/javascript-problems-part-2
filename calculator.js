
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}


function calculateAllFunc(a, b, operation) {
    if (operation === 'add') {
        const result = add(a, b)
        return result
    }
    else if(operation === 'subtract'){
        return a - b
    }
    else if(operation === 'multiply'){
        return a * b
    }
    else if(operation === 'divide'){
        return a / b;
    }
    else{
        return 'allowed only + - * /'
    }
}

const result = calculateAllFunc(10, 5, 'divide');
console.log(result);