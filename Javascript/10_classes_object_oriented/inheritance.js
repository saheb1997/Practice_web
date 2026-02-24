class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`UserNmae is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    return `A new course was added by ${this.username}`;
  }
}

const chai = new Teacher("chai", "chai@gmail.com", "123");

console.log(chai.addCourse());
const massalaChai = new User("masalachai");
massalaChai.logMe();

console.log(chai instanceof User);
