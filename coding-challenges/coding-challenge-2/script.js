// Calculating John and Mike's average score for each team
var gameOneJohn, gameTwoJohn, gameThreeJohn, totalPointsJohn, averageTeamPointsJohn, teamJohn;
var gameOneMike, gameTwoMike, gameThreeMike, totalPointsMike, averageTeamPointsMike, teamMike;

// John's Team Scores and Average Points Per Game
gameOneJohn = 89;
gameTwoJohn = 120;
gameThreeJohn = 103;
totalPointsJohn = gameOneJohn + gameTwoJohn + gameThreeJohn;
averageTeamPointsJohn = totalPointsJohn / 3;
console.log('John\'s Team averaged ' + averageTeamPointsJohn + ' points per game.');
var teamJohn = averageTeamPointsJohn;

// Mike's Team Scores and Average Points Per Game
gameOneMike = 116;
gameTwoMike = 94;
gameThreeMike = 123;
totalPointsMike = gameOneMike + gameTwoMike + gameThreeMike;
averageTeamPointsMike = totalPointsMike / 3;
console.log('Mike\'s Team averaged ' + averageTeamPointsMike + ' points per game.');
var teamMike = averageTeamPointsMike;

// Adding Mary to the mix
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreMary);

if (teamJohn > teamMike && teamJohn > scoreMary) {
  console.log('John\'s Team is the winner averaging ' + averageTeamPointsJohn + ' points per basketball bame.');
} else if (teamMike > teamJohn && teamMike > scoreMary) {
  console.log('Mike\'s Team is the winner averaging ' + averageTeamPointsMike + ' points per basketball bame.');
} else if (scoreMary > teamJohn && scoreMary > teamMike) {
  console.log('Mary\'s Team is the winner averaging ' + scoreMary + ' points per basketball bame.');
} else {
  console.log('We have a draw.');
}

// Team With Highest Scoring Average Per Game
/*if (teamJohn > teamMike) {
  console.log('John\'s Team is the winner averaging ' + averageTeamPointsJohn + ' points per basketball bame.');
} else if (teamMike > teamJohn) {
  console.log('Mike\'s Team is the winner averaging ' + averageTeamPointsMike + ' points per basketball bame.');
} else {
  console.log('We have a Draw with both teams averaging the same points per basketball game.');
}*/
// Mike's team should be the winner
