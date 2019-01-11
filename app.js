//Object Literals

// let person1 = {
//     name: 'Kyle',
//     sayHello: function() {
//         console.log(`Hello! My name is ${this.name}.`);
//     }
// };

// let person2 = {
//     name: 'Robin',
//     sayHello: function() {
//         console.log(`Hello! My name is ${this.name}.`);
//     }
// };

// let person3 = {
//     name: 'David',
//     sayHello: function() {
//         console.log(`Hello! My name is ${this.name}.`);
//     }
// };

// let person4 = {
//     name: 'Michael',
//     sayHello: function() {
//         console.log(`Hello! My name is ${this.name}.`);
//     }
// };

// let person5 = {
//     name: 'Kelly',
//     sayHello: function() {
//         console.log(`Hello! My name is ${this.name}.`);
//     }
// };

// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

//Psuedo Class

// function Person(name, city, age) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
// }

// Person.prototype.greet = function() {
//     console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`);
// }

// person1 = new Person('Kyle', 'Parsons', 23);
// person2 = new Person('Robin', 'Spring Hill', 23);
// person3 = new Person('David', 'Thompsons Station', 29);
// person4 = new Person('Michael', 'Thompsons Station', 30);
// person5 = new Person('Kelly', 'Shelbyville', 26);

// person1.greet();
// person2.greet();
// person3.greet();
// person4.greet();
// person5.greet();

//ES6 Psuedo Class

// class Person {
//     constructor(name, city, age) {
//         this.name = name;
//         this.city = city;
//         this.age = age;
//     }

//     sayHello() {
//         console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`);
//     }
// }

// person1 = new Person('Kyle', 'Parsons', 23);
// person2 = new Person('Robin', 'Spring Hill', 23);
// person3 = new Person('David', 'Thompsons Station', 29);
// person4 = new Person('Michael', 'Thompsons Station', 30);
// person5 = new Person('Kelly', 'Shelbyville', 26);

// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

//Inheritance

class Vehicle {
    constructor(type, manufacturer, numWheels) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.numWheels = numWheels;
    }

    aboutVehicle() {
        console.log(`This is a ${this.type} made by ${this.manufacturer}. It has ${this.numWheels} wheels.`);
    }
}

class Truck extends Vehicle {
    constructor(type, manufacturer, numWheels, numDoors, truckBed = true) {
        super(type, manufacturer, numWheels);
        this.numDoors = numDoors;
        this.truckBed = truckBed;
    }

    aboutVehicle() {
        console.log(`This is a ${this.type} made by ${this.manufacturer}. It has ${this.numWheels} wheels. It also has ${this.numDoors} doors and a ${this.truckBed}.`);
    }
}

class Sedan extends Vehicle {
    constructor(type, manufacturer, numWheels, numDoors, size, mpg) {
        super(type, manufacturer, numWheels);
        this.numDoors = numDoors;
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicle() {
        console.log(`This is a ${this.type} made by ${this.manufacturer}. It has ${this.numWheels} wheels. This is a ${this.size} ${this.type} with ${this.numDoors} doors and gets ${this.mpg} miles per gallon.`);
    }
}

class Motorcycle extends Vehicle {
    constructor(type, manufacturer, numWheels, handlebars, noDoors) {
        super(type, manufacturer, numWheels);
        this.handlebars = handlebars;
        this.noDoors = noDoors;
    }

    aboutVehicle() {
        console.log(`This is a ${this.type} made by ${this.manufacturer}. It has ${this.numWheels} wheels. It also has ${this.handlebars} but ${this.noDoors}.`);
    }
}

let v1 = new Vehicle('sedan', 'Honda', 'four');
let t1 = new Truck('truck', 'Ford', 'four', 'four', 'truck bed');
let s1 = new Sedan('sedan', 'Suzuki', 'four', 'four', 'small', 32);
let m1 = new Motorcycle('motorcycle', 'Harley-Davidson', 'two', 'handlebars', 'no doors');

v1.aboutVehicle();
t1.aboutVehicle();
s1.aboutVehicle();
m1.aboutVehicle();

let v2 = new Vehicle('truck', 'Dodge', 'four');
let t2 = new Truck('truck', 'Toyota', 'four', 'two', 'truck bed');
let s2 = new Sedan('sedan', 'GMC', 'four', 'four', 'medium', 28);
let m2 = new Motorcycle('motorcycle', 'ATK', 'two', 'handlebars', 'no doors');

v2.aboutVehicle();
t2.aboutVehicle();
s2.aboutVehicle();
m2.aboutVehicle();