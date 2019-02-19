// Step 1: Assign Mass and Height
var marksMass, johnsMass, marksHeight, johnsHeight;
marksMass = 79.4; // kg
marksHeight = 1.74; // meters
johnsMass = 95.26;
johnsHeight = 1.83;
//var marksMassAndHeight = 'Marks mass is ' + marksMass + 'kg and his height is ' + marksHeight + 'm.';

//console.log(marksMassAndHeight);
// console.log('Johns mass is ' + johnsMass + 'kg and his height is ' + johnsHeight + 'm.');


// Step 2: Calculate BMI's
var marksBMI = marksMass / (marksHeight ** 2);
console.log("Mark's BMI is " + marksBMI);

var johnsBMI = johnsMass / (johnsHeight ** 2);
console.log("John's BMI is " + johnsBMI);


// Step 3: Create a Boolean Variable of whose BMI is higher
var marksBMIHigher = marksBMI > johnsBMI;
// console.log(marksBMIHigher);


// Step 4: Print a String containing info about BMI
console.log("Is Mark's BMI higher than John's? " + marksBMIHigher);
