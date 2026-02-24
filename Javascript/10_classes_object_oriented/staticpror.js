class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username:${this.username}`);
  }
  static createId() {
    return "123";
  }
}

// const saheb = new User("saheb");
// console.log(saheb.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "saheb@gmail.com");
iphone.logMe();
