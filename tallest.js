
const numbers = [56, 34, 3, 23, 56, 89, 45]

function getMax(numbers) {
    let maxNumber = numbers[0]
    for (const number of numbers) {
        if (number > maxNumber) {
            maxNumber = number
        }
    }
    return maxNumber
}

// const maxResult = getMax(numbers);
// console.log('max number is', maxResult);

// [56, 34, 3, 23, 56, 89, 45]
function getMin() {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number
        }
    }
    return min
}

const minResult = getMin(numbers);
console.log('min number is', minResult);