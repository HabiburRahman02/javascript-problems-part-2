// const num1 = 56;
// const num2 = 435;
// if(num1 > num2){
//     console.log('num1 is big')
// }
// else{
//     console.log('num2 is big')
// }


const num1 = 756;
const num2 = 435;

function maxNumber(num1, num2) {
    if (num1 > num2) {
        return num1
    }
    else {
        return num2
    }
}

const max = maxNumber(num1, num2);
console.log('max number is', max)