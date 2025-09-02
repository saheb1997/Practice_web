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
console.log(mycar.start());
console.log(mycar.drive());











