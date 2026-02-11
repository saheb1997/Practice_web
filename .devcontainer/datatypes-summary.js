// how to store the data in the memory and access the that data based on that data type is categorise in two types 
// 1.primitive and 2. Non primitive


// premitve

// 1.string 2.Number 3.Boolearn 4.null 5. undefined 
// 6. Symbol 7.BigInt

const score =100
const scorevalue =100.3
const isLoggedIn =false
const Temp = null

let usertEmail //it will store undefined value

const id = Symbol("123")
const anotherId = Symbol('123')
console.log(id == anotherId) // this is not same

const bigNumber  = 41234123413241n// This value is store as big int


// Reference type(Non premitive)

// Array , Objects , Functions 

const heros =[ "Shaktiman" , "naagraj" , "doga"]

let myobj ={
    name: "saheb",
    age :22,
}
const myFunction = function (params) {
    console.log("hello world");
    
}

console.table([typeof bigNumber,typeof heros,typeof myobj])


