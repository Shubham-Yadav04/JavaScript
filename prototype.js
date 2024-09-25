// When you define properties inside the class's constructor function, these properties are attached to each instance of the class. Methods defined in the class body are added to the prototype.


class Person {
    constructor(name, age) {
        this.name = name;  // Instance property
        this.age = age;    // Instance property
    }

    greet() {  // Prototype method
        console.log(`Hello, my name is ${this.name}`);
    }
}

let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

console.log(person1.name);  // Instance property: Output "Alice"
console.log(person2.name);  // Instance property: Output "Bob"

person1.greet();  // Prototype method: Output "Hello, my name is Alice"
person2.greet();  // Prototype method: Output "Hello, my name is Bob"



// adding prperties inside the class prototype manually 


Car.prototype.startEngine = function() {
    console.log(`${this.make} ${this.model} engine started.`);
};

// Adding a property to the prototype
Car.prototype.wheels = 4;  // All cars share this prototype property
