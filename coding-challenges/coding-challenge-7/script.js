// Coding Challenge 7
// Building a fun quiz game in the console

(function() {
function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}

Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
        console.log('Correct Answer!');
    } else {
        console.log('Wrong Answer. Try Again :)')
    }
}

var q1 = new Question('What is the 10 x 10?', [20, 1000, 100],2);

var q2 = new Question('What is the name of this course\'s teacher?',['John','Michael','Jonas'],2);

var q3 = new Question('What best describes coding?',['Boring', 'Hard','Fun','Tedious'],2);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = parseInt(prompt('Please select the correct the answer.'));

questions[n].checkAnswer(answer);
})();



































// sign = window.prompt('Type your answer in here as a number.');
