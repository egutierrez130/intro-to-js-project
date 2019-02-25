/************************
* Variables and type coerecion
*/
/*var firstName = 'John';
var age = 28;
// Type coercion
console.log(firstName + ' ' + age);

// here we declare multiple variables on the same line
var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty-eight';
job = 'driver';

// "alert" is like a pop-up on the browser window
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// "prompt" is a Pop-up on browser window that requires user feedback
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/



/************************
* Basic Operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn,yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operator
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/


/****************************
* Operator Precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
// Doing this calculation all in one line
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average); // 32

// Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);


// More Operators
//x = x * 2; // is the same as
x *= 2;
console.log(x); // 52
x += 10;
console.log(x); // 62
x++;
console.log(x); // 63
*/


/*********************************
* If / else statements
*/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}


var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}


var marksMass, johnsMass, marksHeight, johnsHeight;
marksMass = 79.4; // kg
marksHeight = 1.74; // meters
johnsMass = 95.26;
johnsHeight = 1.83;

var marksBMI = marksMass / (marksHeight ** 2);
var johnsBMI = johnsMass / (johnsHeight ** 2);

if (marksBMI > johnsBMI) {
  console.log('Mark\'s BMI is higher than John\'s.');
} else {
  console.log('John\'s BMI is higher than Mark\'s.');
}
*/


/*****************************
* Boolean Logic
AND (&&)  => true if ALL are true
OR  (||)  => true if ONE is true
NOT (!)   => inverts true/false value
*/
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
 } else if (age >= 20 && age < 30) {
   console.log(firstName + ' is a young man.');
 } else {
    console.log(firstName + ' is a man.');
}
*/
/********************************
* The Ternary Operator and Switch statements
*/

// The ternary allows us to write like an if...else statement all in one line.
/*
var firstName = 'John';
var age = 20;

// ternary, because it has three operands
// it has condition, if, and else
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*code below is the same as ternary code above
if (age >= 18) {
  var drink = 'beer';
} else {
  var drink = 'juice';
}
*/

// Switch statement
// Just like if and else if statements...except it looks "cleaner"
/*
var job = 'teacher';
switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon.');
    break;
  case 'designer':
    console.log(firstName + ' designs beautiful websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
}
*/


/*
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >=20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
}
*/


/******************************
* Truthy and Falsy Values and equality Operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values
// good way to check if a variable has been defined

/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
  console.log('Variable has NOT been defined');
}

// Equality Operators
if (height === '23') {
    console.log('The == operator does type coercion');
} else {
  console.log('This is a === operator that is very strict!');
}
*/
// Best practice is to use the === operators.

/*********************************
* Functions
*/

// you can pass either 0 or multiple arguments in the the function parantheses, separated by commas.
// I like to think of a function as like a machine that receives some input, then it does some stuff with it  and finally returns something else.
// the DRY principle is why we use functions. (" Don't Repeat Yourself")
/*
function calculateAge(birthYear) {
    return 2019 - birthYear;
}
// time to pass in the argument in the parantheses
// we need to store the result somewhere so we create a variable for that age.
var ageEdgar = calculateAge(1992);
var ageBlanca = calculateAge(1968);
var ageTony = calculateAge(1968);
var ageJackie = calculateAge(1996);
console.log(ageEdgar, ageBlanca, ageTony, ageJackie);


// this is a function that calculates the years until retirement.
// functions can also call other functions. Very usefull.
// functions do not have to return anything. Which is why we didn't store anything in this example. We just console logged it.
function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years ');
  } else {
    console.log(firstName + ' is already retired.');
  }
}


yearsUntilRetirement(1992, 'Edgar');
yearsUntilRetirement(1996, 'Jackie');
yearsUntilRetirement(1968, 'Blanca');
yearsUntilRetirement(1953, 'Tony');
*/

/**********************************
* Function Statements and Expressions
*/

// Function Declaration
// function whatDoYouDo(job, firstName) {}

// Function Expression
/*
var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return firstName + ' teaches kids how to code.';
    case 'driver':
      return firstName + ' drives a cab around Fresno.';
    case 'designer':
      return firstName + ' designs beautiful websites.';
    default:
      return firstName + ' does something else.';
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Mike'));
console.log(whatDoYouDo('coach', 'Eli'));
*/
/* Difference between Expressions and Statements
JavaScript expressons are pieces of code that always produce a value, and it doesn't matter how long they are as long as the code results in a single value, and then it is an expression.

JavaScript statments perform actions. They do things but they do not produce immediate results, so things like if else statements, a while loop, or even a function declaration. They don't produce any immediate value.
*/

/***************************************
* Arrays
*/

// Things inside arrays are called [elements]
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

// This is how we retrieve data from Arrays
console.log(names); // prints a list of all elements in arrays.
console.log(names.length); // prints number of elements in array.
console.log(names[0]);

// Mutate array data aka change/manipulate
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different Data Types
var john = ['John', 'Smith', 1990, 'teacher', 'designer', false];

// Methods
john.push('blue'); // push will add an element at the end of the array.
john.unshift('Mr.'); // adds element to the beginning of the array.
console.log(john);

john.pop(); // removes element from the end.
john.shift(); // removes element from the front of array.
console.log(john);

console.log(john.indexOf(1990)); // if we want to know the position of an element.
// if we pass in an element that is not in the array, the console will return "-1".

var isDesigner = john.indexOf('designer') === -1  ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);
*/


/*********************************
* Objects and Properties
*/

// Object literal
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};
// all of the different ways of calling the properties
console.log(john);
console.log(john.lastName); // using the dot"." to call the properties of the object.
console.log(john['lastName']);
var x = 'birthYear'; // using variables. can be useful.
console.log(john[x]);

// mutating data
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1990;
jane['lastName'] = 'Smith';
console.log(jane);

















//
