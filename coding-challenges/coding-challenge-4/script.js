/*Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀*/

// 1.
var mark = {
  fullName: 'Mark',
  mass: 79.4,
  height: 1.74,
  calcBMI: function(){
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};
mark.calcBMI();
console.log(mark);

var john = {
  fullName: 'John',
  
  mass: 95.26,
  height: 1.83,
  calcBMI: function(){
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};
john.calcBMI();
console.log(john);

if (mark.calcBMI() > john.calcBMI()) {
  console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else if (john.bmi > mark.bmi) {
  console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else {
  console.log('They have the same BMI.');
}
