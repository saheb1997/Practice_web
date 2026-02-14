const user = {
  username: 'saheb',
  price: 999,

  welcomeMessage: function () {
    // console.log(`${this.username} , welcome to website`)
  },
}

// 📌 SHORT NOTE: `this` + Normal vs Arrow Function (Quick Revision)

// 🔥 Rule:
// `this` depends on HOW a function is called (not where it is written)
// Arrow function does NOT have its own `this`
// Arrow uses parent (lexical) `this`

// ❌ Case 1: Normal function called directly
let val1 = 'name'

function myFunction1() {
  console.log('Normal this:', this.val1) // undefined

  const arrowFunction = () => {
    console.log('Arrow this:', this.val1) // undefined (inherits same this)
  }

  arrowFunction()
}

myFunction1()
// Reason:
// Called as myFunction1() → this = global/undefined
// val1 is NOT inside this

// ✅ Case 2: Function inside object (correct use of this)
const obj = {
  val1: 'name',

  myFunction1() {
    console.log('Normal this:', this.val1) // "name"

    const arrowFunction = () => {
      console.log('Arrow this:', this.val1) // "name" (inherits from parent)
    }

    arrowFunction()
  },
}

obj.myFunction1()
// Reason:
// Called as obj.myFunction1() → this = obj
// Arrow inherits parent's this (obj)

// 🚀 One-line memory:
// Normal function → own this (depends on call)
// Arrow function → uses parent this (lexical this)

const addtwo = (num1, num2) => {
  return num1 + num2
}

console.log(addtwo(2, 3))

// another way to write arrow function is

const addTwo = (num1, num2) => num1 + num2

console.log(addTwo(2, 5))

const fun = () => ({ username: 'saheb' })
console.log(fun())
