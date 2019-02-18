var firstName = 'John';
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
