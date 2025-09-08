// let car = {
//     make: "Toyota",
//     model: "camry",
//     year: 2020,
    
//     start: function () {
//         return `${this.make} car got started in ${this.year}`;
//     },
// };

// console.log(car.start()); 


function person(name, age) {
    this.name = name,
    this.age  = age
};

let john = new person("john", 20);
// console.log(john.name);





function Animal(type) {
    this.type = type
        
};


Animal.prototype.speak = function () {
    return `${this.type} make a sound`;
}

// here inject a prototype function for array
Array.prototype.hitesh = function () {
    return ` Custom method ${this}`;
}

let myarray = [1, 2, 3];
console.log(myarray.hitesh());




// Inheritance

class Vehicle{
    constructor(make, model) {
        this.make = make,
        this.model = model
    }

    start() {
        return `${this.model} is a car from ${this.make}`;
    }
}


class car extends Vehicle{

    drive() {
        return `${this.make}: this is an inheritance example`;
    }
}

let mycar = new car("Toyota", "corolla")
// console.log(mycar.start());
// console.log(mycar.drive());







let vehone = new Vehicle("BMW", "X5");
// console.log(vehone.start());



// Encapsulation

class BankAccount {
    #balance = 0;
    
    deposite(amount) {
        this.#balance += amount;
        return this.#balance;
    }
    getBalance(){
        return `$${this.#balance}`;
    }

}

let account = new BankAccount()
// console.log(account.getBalance());
 

// Abstraction 
class coffemachine{
    start() {
        return `stratign the machine...`;
    }
    brewcoffe() {
        return `Brewing coffe`;
    }
    pressStartButton() {
        const start = this.start();
        const brewcoffe = this.brewcoffe();
        return ` ${start}  ${brewcoffe}`;
        
    }
}

let mymachine = new coffemachine();
// console.log(mymachine.pressStartButton())




// polymorphism
class Bird {
    fly()
    {
        return `Flying....`;
        }
}

class Penguin extends Bird{
    fly() {
        return `penguins can't fly`;
    }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(penguin.fly());




class Calculator {
    static add(a, b) {
        return a + b;
    }
}

// let minicalc = new Calculator();
// console.log(Calculator.add(2, 3));


// getter and setter
class Employee{
    constructor(name, salary) {
        this.name = name;
        this._salary = salary;

    }
    get salary() {
        return `you are not allowed to see the salary`;
    }
    set salary(value) {
        if (value < 0)
        {
            console.error("Invalid salary");
        }
        else {
            this._salary = value;
        }
    }
}

let emp = new Employee("Allice", 50000);
console.log(emp._salary)









