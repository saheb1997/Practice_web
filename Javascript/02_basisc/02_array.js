const marvel_heros = ['Thor', 'Ironman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros)

// spread operator it spread the array elements instead of concate it easy to use
const allheros = [...marvel_heros, ...dc_heros]
// console.log(allheros)

// it is for flatening the array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// here from change other datatype to array type
// console.log(Array.isArray('saheb'))
// console.log(Array.from('saheb'))
console.log(Array.from(Object.values({ name: 'saheb' })))
console.log(Array.from(Object.keys({ name: 'saheb' })))
console.log(Array.from(Object.entries({ name: 'saheb' })))

// here of take the numbers and make a array
let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3))
