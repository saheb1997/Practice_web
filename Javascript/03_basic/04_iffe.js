// immediately Invoked Function Expressions(IIFE)
(function chai() {
  console.log(`Db connected`);
})();

// why use iifi

// here api key exposed globally and can anyone change this variable

const API_KEY = "SECRET123";

function fetchData() {
  console.log(API_KEY);
}

// solution
const fetchData1 = (function () {
  const API_KEY = "SECRET123"; // 🔒 private

  return function () {
    console.log(API_KEY);
  };
})();

fetchData();
console.log(API_KEY); // ❌ ReferenceError (safe) here Api key will not exposed to globally

function init() {
  user = "May"; // ❗ Forgot var/let/const
}

init();
console.log(user); // "May" (leaked to global)

// here after funcion rap in ( ) we have give ";" other wise it will compiler not get to know where to end the execution
(function chai() {
  console.log(`DB connected`);
})(); // here we have to give ";" at the end

(() => {
  console.log(`Db connected`);
})();
