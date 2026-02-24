// const user = {
//   username: "saheb",
//   logincount: 8,
//   singedIn: true,
//   getUserDetails: function () {
//     console.log(`username:${this.username}`);
//     console.log("got user detial form database");
//   },
// };

// console.log(user.username);

function user(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greatingsgreatings = function () {
    console.log(`welcome ${this.username}`);
  };
  return this;
}
// when we write new keyword
// step 1 :- An empty object will created
// step 2 :- A constructor fucntion will call for this new keyword
// step 3 :- all data will passon to the this keyword
// step 4 :- we get our object

const userOne = new user("saheb", 12, true);
const usertwo = new user("sam", 11, false);
console.log(userOne.constructor);
// console.log(usertwo);
