// Function constructor
// * Attaching methods to the constructor function's prototype is something that is really common to use.
/*var john = {
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

Person.prototype.lastName = 'Smith';

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

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/


// Object.create

// The Object.create accecpts a second parameter, which helps us move things along at a faster pace.
// One of the biggest benefits of Object.create is that it allows us to implement a really complex inheritant structures in an easier way than function constructors. Allows us to directly specify which object should be a prototype.
// The function constructor is still the most popular way of working with objects in JavaScript.

// First: we have to write the prototype as a simple object.
/*
var personProto = {
    calcAge: function() {
      console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job ='teacher';

var jane = Object.create(personProto,
  {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1992 },
    job: { value: 'Cook' }
});
*/


// Primitives vs Objects

// A big difference between primitives and objects is that variables containing primitives actually hold the  data in that variable itself.
// On objects its different, variables associated with objects do not actualy contain the object, but instead they contain a reference to the place in memory, where the object sits, so where the object is stored.
// A variable declared as an object does not have a real copy of the object, it just points to that object.

// Start with Primitives
/*
var a = 23;
var b = a;
a = 46 ;
console.log(a);
console.log(b);

// doing same with objects.
var obj1 = {
    name: 'John',
    age: 26,
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1);
console.log(obj2);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon',
};

function change(a,b){
    a = 30;
    b.city = 'San Francisco';
}

change(age,obj);

console.log(age);
console.log(obj.city);
*/

// Notes: So again, we do not pass an object into a function, but only the reference that points to the object.
// So when we then change the object inside of the function it is still reflected outside fo the function.

/******************************
* First Class Functions: Passing Functions as Arguments
*/

// A function is an instance of the Object type;
// A function behaves like any other object;
// We can store functions in a variable;
// We can pass a function as an argument to another function;
// We can return a function from a function.

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);


console.log(ages);
console.log(rates);
*/
/*******************************************
* Lecutre: Functions returning Functions
*/

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Edgar');
designerQuestion('Mark');
teacherQuestion('Daniel');

// another way to call the function from above
interviewQuestion('teacher')('Edgar');
















//
