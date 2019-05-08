// Coding Challenge 7
// Building a fun quiz game in the console

function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}



var q1 = new Question("What is the 10 x 10?", [20, 1000, 100],2);

var q2 = new Question('What is the name of this course\s teacher?',['John','Michael','Jonas'],2);

var q3 = new Question('What best describes coding?',['Boring', 'Hard','Fun','Tedious'],2);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n]



































// sign = window.prompt('Type your answer in here as a number.');
