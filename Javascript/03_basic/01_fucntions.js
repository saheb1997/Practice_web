function addtwonumber(number1, number2) {
  //here we give parameters
  let num1 = Number(number1)
  let num2 = Number(number2)
  console.log(num1 + num2)
  return num1 + num2
}

// const val = addtwonumber(3, 4) //here it called arguments
// console.log(val)

function loginUserMessage(username = 'sam') {
  if (!username) {
    console.log('pls enter name')
  }

  return ` ${username} just loged in`
}

// console.log(loginUserMessage())

// when we don't know the how many parameter will come
function calculateCartPrice(...num1) {
  return num1
}

// console.log(calculateCartPrice(100, 200, 300))

function calculateCartPrice1(num1, num2, ...num3) {
  //   console.log(num1, num2, num3)
  return 0
}

calculateCartPrice1(100, 200, 300, 400, 500)

const myNewArray = [200, 400, 100, 600]
function retunrSecondvalue(getArray) {
  return getArray[1]
}
console.log(retunrSecondvalue(myNewArray))
