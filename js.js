
// Before & After //

const number = 888.316;
const justEightEightEight = number.toPrecision(3)
const checkingNumber = isNaN(number);
const exponential = Number.parseFloat(number).toExponential(2)


// Solutions //

console.log('Before',number);
console.log('After', justEightEightEight);
console.log('After', checkingNumber);
console.log('After', exponential);
