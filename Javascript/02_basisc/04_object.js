// const tinderUser = new Object()//single ton object
const tinderUser = {} //non single ton object
tinderUser.id = '123abc'
tinderUser.name = 'saheb'
tinderUser.isLoggedIn = false

const regularUser = {
  email: 'sahebs450@gmail.com',
  fullname: {
    userfullname: {
      firstname: 'saheb',
      lastname: 'sarkar',
    },
  },
}
// console.log(regularUser.fullname.userfullname)

const obj1 = {
  1: 'a',
  2: 'b',
}

const obj2 = {
  3: 'c',
  4: 'd',
}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2)

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)

// console.log(Object.keys(tinderUser)) //it will give values in array

// console.log(Object.entries(tinderUser))//this will make all the entries and array ['key':'value']

// this for check that is object have specific key
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// Destructuring

const course = {
  coursename: 'js in hindi',
  priice: '999',
  courseInstructor: 'saheb',
}

// this is called destructuring
const { courseInstructor: instructor } = course
console.log(instructor)[
  // when we do api call that time value come as json
  // {
  //     "name" : "saheb",
  //     "coursename" : "js",
  //     "price" :"free"
  // }

  // some time it come as array which is collection of objects
  ({}, {}, {})
]
