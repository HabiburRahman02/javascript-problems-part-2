// upto 100 -------------> 100
// more than 101 - 200 ---> 90
// more than 200 ---------> 70

function getDiscount(quantity) {
    if(quantity <= 100){
        return quantity * 100;
    }
    else if(quantity <= 200){
        return quantity * 90
    }
    else{
        return quantity * 70
    }
}

const discountTotal = getDiscount(220);
console.log(discountTotal);