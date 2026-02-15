// array
const myArr = [0, 1, 2, 3, 4]
// console.log(myArr)

const myHeros = ['Ironman', 'Cpatain_american']

const myarray2 = new Array(1, 2, 3, 4, 4)
// console.log(myArr[1])

myArr.push(5)
myArr.push(7)
myArr.pop()

// it will add the number at the bigining of the array
// myArr.unshift(9)
// console.log(myArr)

// It will remove the first element of the array
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(4))
// console.log(myArr.indexOf(4))

// it change the array in string
const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)

// slice , splice

console.log('A', myArr)

// in slice it go start to end-1 and splice goes start to end splice will manupulat the array
const myn1 = myArr.slice(1, 3)
console.log('slice', myn1)
console.log(myArr)

const myn2 = myArr.splice(1, 3)
console.log('splice:', myn2)
console.log(myArr)
