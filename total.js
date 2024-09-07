const products = [
    { name: 'pant', price: 1100, quantity: 2 },
    { name: 'shirt', price: 500, quantity: 3 },
    { name: 'genji', price: 200, quantity: 1 },
    { name: 'lungi', price: 400, quantity: 4 },
]


function getTotalCost(products) {
    let total = 0;
    for (const product of products) {
        total = total + product.price
    }
    return total
}

const totalCost = getTotalCost(products);
console.log('cost total: ', totalCost);