function person(name,age ) {
    this.name = name,
    this.age = age
    
}


function car(make, model) {
    this.make = make,
    this.model = model
}


// let mycar = new car("Toyota", "camry");
// console.log(mycar);


// let mynewcar = new car("tata", "Safari");
// console.log(mynewcar);


function Tea(type) {
    this.type = type,
        this.desctibe = function () {
        return `this is a cup of ${this.type}`
    }
}

let lemonTea = new Tea("lemon tea");
console.log(lemonTea.desctibe());




function Animal(species) {
    this.species = species
};

Animal.prototype.sound = function () {
    return `${this.species} makes a sound`;
}

let dog = new Animal("Dog");
console.log(dog.sound());







function Drink(name) {
    if (!new.target) {
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}

let tea = new Drink("tea");
let coffe = Drink("coffee");



