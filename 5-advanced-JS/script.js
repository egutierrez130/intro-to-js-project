// Function constructor
// * Attaching methods to the constructor function's prototype is something that is really common to use.
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// the name function constructor implies that we're going to use a function here.
// function constructors begin with an uppercase letter.
// after the finishing the function constructor below you can then
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
// starting inheritance
Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

// this next step is called instantiation because these objects are instances of the person object.
// need to understand what the new operator does.
// When we use the new operator first a brand new empty object is created. then after that, the constructor function (Person) is called with the arguments that were specified.
// Calling a function creates a new execution context, that also has a .this variable
// The "new" variable is an empty object
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

// inheritance from Person.prototype.calculateAge...
john.calculateAge();
jane.calculateAge();
mark.calculateAge();
