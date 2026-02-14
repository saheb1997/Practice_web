const mySym = Symbol('key1')

const jsUser = {
  name: 'saheb',
  age: '28',
  location: 'kolkata',
  [mySym]: 'mykey1', //* this is the way for take symbol as key other wise it will treat as string
  email: 'sahebs450@gmai.com',
  isLoggedIn: false,
  lastLoginDays: ['Monday', 'saturday'],
  'full name': 'saheb sarkar',
}

// ther is two ways we can access the object elements
// console.log(jsUser.email)
// console.log(jsUser['email'])

// problem with . operator is if key is in strign then with dot oeprator we not able to access

// this is not valid
// console.log(jsUser.fullname);

// console.log(jsUser['full name'])

// console.log(jsUser)

//freeze the object here even though we change the value it will not change but it will not give any error
// Object.freeze(jsUser)

jsUser.age = 23
// console.log(jsUser)

jsUser.gretting = function () {
  console.log('hellow js user')
}

jsUser.gretting2 = function () {
  console.log(`hello js user, ${this.name}`)
}

console.log(jsUser.gretting())
console.log(jsUser.gretting2())

//************ why we use symbols */

// Create a Symbol
// Symbol creates a unique value (even if description is same)
const id = Symbol('id')

// Create an object with a Symbol key
const user = {
  [id]: 101, // This key is NOT a string "id"
  // It is a Symbol key
}

// Function that adds a normal string key
function addExtra(obj) {
  // Dot notation always creates/uses a STRING key
  // This is same as: obj["id"] = 999
  obj.id = 999
}

// Call function
addExtra(user)

// Accessing Symbol key
// We must use bracket notation with the actual symbol
// console.log(user[id])
// 101 → This accesses the Symbol key

// Accessing string key
// console.log(user.id)
// 999 → This accesses the string "id" key created by function

// Let’s print full object
// console.log(user)
/*
Output will look like:

{
  id: 999,
  [Symbol(id)]: 101
}
*/

// Show all string keys
// console.log(Object.keys(user))
// // ['id'] → Symbol keys are NOT included

// // Show all Symbol keys
// console.log(Object.getOwnPropertySymbols(user))
// [ Symbol(id) ]

// Check types
// console.log(typeof id) // 'symbol'
// console.log(typeof user.id) // 'number'
