const phones = [
    { name: 'samsu', price: 56000, color: 'black' },
    { name: 'oppo', price: 23000, color: 'black' },
    { name: 'vivo', price: 5000, color: 'black' },
    { name: 'Iphone', price: 166000, color: 'black' },
    { name: 'realme', price: 34000, color: 'black' },
];


function getExpensive() {
    let max = phones[0];
    for (const phone of phones) {
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
}

const expensive = getExpensive(phones);
console.log('expensive phone is: ', expensive);