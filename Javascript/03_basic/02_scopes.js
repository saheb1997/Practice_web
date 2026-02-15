if (true) {
  let a = 10
  const b = 20
  var c = 30 //    **** don't use var or just variable name its scope will global so it create problem so use let for variable define
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(params) {
  const username = 'saheb'
  function two() {
    const website = 'youtube'
    console.log(username)
  }
  two()
}
one()
