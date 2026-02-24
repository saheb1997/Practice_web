// class User {
//   constructor(email, password) {
//     ((this.email = email), (this.password = password));
//   }

//   get password() {
//     return this._password.toUpperCase();
//   }
//   set password(value) {
//     this._password = value.toUpperCase();
//   }

//   get email() {
//     return this._email;
//   }
//   set email(value) {
//     this._email = value;
//   }
// }

// const saheb = new User("saheb", "abc");
// console.log(saheb.email, saheb.password);

// another way to define getter and seter

function User1(email, password) {
  this._email = email;
  this._password = password;
  Object.defineProperty(this, "email", {
    get() {
      return "not able to show";
    },
    set(value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password;
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const chai = new User1("sahebs@450gmail.com", "cahi");
console.log(chai.email, chai.password);
