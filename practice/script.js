// Practicing Loops
// For Loops
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 1; i <= 20; i++) {
    console.log(i);
}

for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer',false];
// start a 0 because that is where the array starts and index 0 which is 'John'.
// counter argument is john.length, which gives you all of the elements within the array.
for (var i = 0; i < john.length; i ++) {
    console.log(john[i]);
}

for (var i = 0; i < john.length; i += 2) {
    console.log(john[i]);
}

var i = 0;
// practicing with a while loop.
while(i < john.length) {
    console.log(john[i]);
    i++;
}
*/


// continue and break statements

// continue
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

// now the difference with break is that it exits the current iteration and the entire loop.

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}








//
