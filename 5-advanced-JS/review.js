// Function Constructors
// this is inheritance in practice.

/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1992, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(jane.lastName);
console.log(john.lastName);
console.log(mark.lastName);
*/



// Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';
*/



// Lecture: Passing functions as Arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

// We created a generic function which loops over an input array.
// Then we gave it a function as input which is used to calculate something based on each element of the array.
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// We created 3 callback functions (calculateAge, isFullAge, maxHeartRate).
function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <=81) {
          return 220 - el;
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/



// Lecture: Functions returning Functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach ' + name + '?');
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
designerQuestion('Jane');

interviewQuestion('teacher')('Mark');
*/



// Lecture: IIFE
// IIFE allows you to maintain data privacy and also does not interfere with other variables in our global execution context.

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >=5);
// }
// game();

(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();


(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);






















//
