const score = 400

console.log(score)

const balance = new Number(100)

console.log(balance)

console.log(typeof balance.toString())

console.log(typeof balance.toFixed(2))

//for precision number before decimal get more priority
// it will give precision for upto 4 numbers
const otherNumber = 123.8909
console.log(otherNumber.toPrecision(4))

// for give comas en-IN give indian type by default it is use "US" presentation.
const hundres = 1000000
console.log(hundres.toLocaleString('en-IN'))

// ****************** MATH ********************
// abs
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.7))

//random will give value from 0 to 1
console.log(Math.random())

console.log(Math.random() * 10 + 1)
// here it will shift to one place but for 0.x it will give 0 so we add 1 here
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20
// here for define the range we will do in that way
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
