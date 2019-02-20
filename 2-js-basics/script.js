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
var firstName = 'John';
var age = 20;

// ternary, because it has three operands
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');



















//
