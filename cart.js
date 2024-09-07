const products = [
    { name: 'pant', price: 1100, quantity: 2 },
    { name: 'shirt', price: 500, quantity: 3 },
    { name: 'genji', price: 200, quantity: 1 },
    { name: 'lungi', price: 400, quantity: 34 },
]

function getCart(products) {
    let total = 0;
    for (const product of products) {
        const thisPdCost = product.price * product.quantity;;
        total = total + thisPdCost;
    }
    return total;
}

const totalCost = getCart(products);
console.log('cost total: ', totalCost);