// let myDate = new Date()
// console.log(`Date obj: ${myDate.toString()}`)
// console.log(`date:c${myDate.getDate()}`)
// console.log(myDate.getDay())
// console.log(myDate.getFullYear())
// console.log(myDate.getTime())

// let myCreateDate = new Date(2023, 0, 23)
// console.log(myCreateDate.toDateString())

let myTimeStamp = new Date()
// console.log(Math.floor(myTimeStamp / 1000))
console.log(myTimeStamp.getDate())

const day = myTimeStamp.toLocaleDateString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

console.log(day) // e.g. "Wednesday"
console.log(myTimeStamp)
