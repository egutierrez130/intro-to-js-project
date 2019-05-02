// Advanced JS: Objects and Functions:


/*********************************
* Everything is an object: inheritance and the prototype chain
*/

// Object-Oriented Programming
/*
* Every JS object has a protoytpe property, which makes inheritance possible in JS;
* The prototype property of an object is where we put methods and properties that we want other objects to inherit;
* The Constructor's prototype property is NOT the prototype of the Constructor itself, it's the prototype of ALL instances that are created through it;
* When a certain method (or property) is called, the search startts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the mothod is found: prototype chain.
* Objects interacting with one another through methods and properties;
* Used to store data, structure applications into modules and keeping code clean.
* Constructor: The constructor acts like a blueprint and is used to create instances that are objects.
* inheritance: is when one object is based on another object. It's when one object gets access to another object's properties and methods.
* The prototype property of an object is where we put methods and properties that we want other properties to inherit.
* The protoype chain is what makes all this inheritance possible, and here is how it works: JS will first try to find that method on that exact object. But if it cannot find it, it will look in the object's prototype, which is the prototype property of it's parent so it moves up in the in the chain. If it finds none, it will be null. ** Null is the only one that has no prototype and is therefore the final link in the protoype chain. UNDEFINED IS returned. 9
*/

// Object
var edgar = {
    name: 'Edgar',
    yearOfBirth: 1992,
    job: 'Sub'
};

// Function Constructor
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// prototype...method
Person.prototype.calcAge = function(){
    console.log(2019 - this.yearOfBirth);
}

// instantiation
var edgar = new Person('Edgar', 1992, 'Sub');
var jackie = new Person('Jackie', 1996, 'Student/Lab Assistant');

edgar.calcAge();
jackie.calcAge();
