/***********************
* Lecture 37 - Execution Contexts
*/

/*
Execution Context: A box, a container, or a wrapper which stores variables
and in which a piece of our code is evaluated and executed.

The Default --> Global Execution Context
- Code that is not inside any function
- Associated with the global object
- In the browser, that's the window object
ex. lastName === window.lastName
// true
*/


/**************************
* Lecture 38 - Execution Contexts in Detail: Creation and Execution Phases and Hoisting
*/

/*
Execution Context object
- Variable Object (VO)
  A) The argument object is created, containing all the arguments that were passed into the function.
  B) Code is scanned for function declarations: for each function, a property is created in the Variable Object, pointing to the function.
  C) Code is scanned for variable declarations: for each variable, a property is created in the Variable Object, and set to undefined.
  B and C are referred to as "Hoisting".
- Scope Chain
- "This Variable"

1. Creation Phase
  A) Creation of the Variable Object(VO)
  B) Creation of the scope Chain
  C) Determine value of the 'this' variable

2. Execution Phase
  - The code of the function that generated the current execution context is ran line by line
*/


/********************************
* Lecture 39 - Hoisting in Practice
*/

/*
Hoisting with functions only works with function declarations.
- The most important thing about hoisting is being able to utilize function declarations before we actually declare them in our code.
- Very useful.


*/
// Works because it is a function declaration.
// We called the function before it was created.
/*calculateAge(1990);

function calculateAge(year) {
  console.log(2016 - year);
}

// Writing this as a function expression.
// Will not work.
// retirement(1956);

var retirement = function(year) {
  console.log(65 - (2016 - year));
}

// variables
// console.log(age); --> this show us as undefined in console.
var age = 23;
console.log(age);

function foo() {
  var age = 65;
  console.log(age);
}
foo();
console.log(age);
*/


/***************************************
* Lecture 40 - Scoping and the Scope Chain
*/


// Scoping answers the question "where can we access a certain variable"
// Each new function creates a scope: the space/environment, in which the variables it defines are accessible.
// Lexical Scoping: a function that is lexically within another function gets access to the scope of the outer function.

// Scope Chain Example
/*var a = 'Hello!';
first();

function first(){
  var b = 'Hi!';
  second();

  function second(){
    var c = 'Hey!';
    third()
  }
}

function third() {
  var d = 'John';
  // console.log(c);
  console.log(a+d);
}
*/


/**************************************
* Lecture 41 - The 'This' Keyword
*/

// Regular function call: the this Keyword points at the global object, (the window object, in the browser).
// Method call: the this variable points to the object that is calling the method.
// The this keyword is not assigned a value until a function where it is defined is actually called.
// Invoked and called are the same thing.


/**************************************
* Lecture 41 - The 'this' Keyword in Practice
*/

// console.log(this);
/*
calculateAge(1985);

function calculateAge(year) {
  console.log(2016 - year);
  console.log(this);
}
*/
var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2016 - this.yearOfBirth);

    /*
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
    */
  }
}

john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};
// method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();
















//
