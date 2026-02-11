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


//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack (primitive) , heap (Non-primitive)

//  This is primitive here we get the coppy so one is changed the other will not changed
let myYoutubename = "saheb sarkar"
let anothername = myYoutubename


anothername = "sandip sarkar"

console.log(anothername);
console.log(myYoutubename);



//  non primitive here we get the reference so if one changed then other will also changed
let user1 = {
    usertEmail: "sahebs450@gmail.com",
    upi :"abc" 
}

let user2 =user1;

user2.usertEmail= "user@gmail.com"

console.log(user1);
console.log(user2)

