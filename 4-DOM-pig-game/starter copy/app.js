/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// using the querySelector to change the CSS.
// we use 'style' to call the CSS.
// we use 'display' to call the CSS property.
// we use 'none' to call the CSS value.
document.querySelector('.dice').style.display = 'none';

// "getElementById" is a little faster than "querySelector"
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// Event Listeners
// We need to pass in two arguments: 1.event types 2.function that will happen once the event happens. The name of the of the function becomes "call-back function" because its a function that is called by another function.

// this was an example for using a built in function in the addEventListener //document.querySelector('.btn-roll').addEventListener('click', btn);
// function btn(){
//   // do something there
// }

// document.querySelector('.btn-roll').addEventListener('click', btn);
// or you can pass in an anonymous function.
// the anonymous function will not have a name.
// can not be reused.
document.querySelector('.btn-roll').addEventListener('click', function(){

  // 1. Random number
  var dice = Math.floor(Math.random() * 6)+ 1;

  // 2. Display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';


  // 3. Update the round score IF the rolled number was NOT a 1.
  if (dice !== 1) {
    //Add Scores
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;

  } else {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // removing and adding classes below
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';

  }

});









// referred to as a setter
document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// this was created to read the content of the element and then store it into x
// referred to as a getter
// var x = document.querySelector('#score-0').textContent;
//
