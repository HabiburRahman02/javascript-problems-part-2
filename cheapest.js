const phones = [
    { name: 'samsu', price: 56000, color: 'black' },
    { name: 'oppo', price: 23000, color: 'black' },
    { name: 'vivo', price: 5000, color: 'black' },
    { name: 'Iphone', price: 166000, color: 'black' },
    { name: 'realme', price: 34000, color: 'black' },
];


function getCheapest() {
    let cheap = phones[0];
    for (const phone of phones) {
        if(phone.price < cheap.price){
            cheap = phone;
        }
    }
    return cheap;
}

const cheap = getCheapest(phones);
console.log('cheapest phone is: ', cheap);