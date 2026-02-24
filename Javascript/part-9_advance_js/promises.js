const promises1 = new Promise(function (resolve, reject) {
  // do an async task
  // DB calls , cryptography , network
  setTimeout(() => {
    console.log("async task is complete");
    resolve();
  }, 1000);
});

promises1.then(function () {
  console.log("promise consume");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("asyns task2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "chai", email: "chai@example.com" });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    console.log("promise4 example");

    if (!error) {
      resolve({ username: "saheb", pasword: "123" });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promises either resolved or rejected");
  });

//promise3

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", pasword: "123" });
    } else {
      reject("Something went worng");
    }
  }, 1000);
});

async function consumePromieFive() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromieFive();

// async function getAlluser(params) {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }
// getAlluser();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
