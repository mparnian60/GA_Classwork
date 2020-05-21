const games = [
    { result: "Win", score: [45, 27] } , 
    { result: "Loss", score: [28, 19] } ,
    { result: "Win", score: [32, 12] } , 
    { result: "Win", score: [14, 7] } ,
    { result: "Win", score: [52, 28] } , 
    { result: "Loss", score: [12, 10] } ,
    { result: "Loss", score: [35, 17] } , 
    { result: "Win", score: [28, 24] } ,
    { result: "Win", score: [35, 20] } , 
    { result: "Loss", score: [9, 6] } 
]

// totalRecord(arr) => return an object with how many wins and losses the team had

function totalRecord(gameArray){
let winLosses = {
    wins:0,
    losses:0
    }

/*for(let i=0; i<games.length; i++) {
    if (gameArray[i].result.toLowerCase() === "win"){ //toLowerCase() avoid capitilazation- it still run if we have different type of win, WIN,WIn,win
        winLosses.wins++;// increament one
    }else{
        winLosses.losses++;
    }
  }
  return winLosses; //this will run the function, without this function still run but doesnt give you answer in console.log
}
*/
//use foreach rather than for loop

gameArray.forEach((game) => {
    if (game.result.toLowerCase() === "win"){ 
        winLosses.wins++;// increament one
    }else{
        winLosses.losses++;
        }
    });
};
console.log(totalRecord(games));

// averagePoints(arr) => calculate the average points the team scored. 
//Pay close attention to whether they won or lost that game!

function average(){
let sum =0;
let numberOfScore = games.length * 2; //as each result has 2 scores

for(let i=0; i<games.length; i++) {
    for( let j=0; j<games[i].score.length; j++){// this will allow us the score array of any size
    sum += games[i].score[j]; //we can have another loop with J for score loop  then it's more flexible 
    // numberOfScore += games[i].score.length; // general program works if we increase the number of element in loop 
    // in above line, const numberOfScore=0; then increase everytime loop runs
    }
  }
  return sum / numberOfScore;
}
console.log("average points is " + average());


// biggestWinStreak(arr) => calculate the number of games largest winning streak the team had.
//  As a bonus, also calculate their average points scored during the streak.

function getBiggestStreakAndAverage (gameArray) {
let biggestStreak = 0;
let currentStreak = 0;
let pointsInStreak = 0;
let currentPointInStreak = 0;

for(let i=0; i<gameArray.length; i++) {
    if (gameArray[i].result.toLowerCase() === "win"){
    currentStreak++;
    currentPointInStreak += gameArray[i].score[0] + gameArray[i].score[1];
    // console.log("win! streak is " +currentStreak);
        if(currentStreak > biggestStreak){
        biggestStreak = currentStreak;
        pointsInStreak = currentPointInStreak;
        // console.log("new top streak: " + biggestStreak);
        }

    }
    else{
        currentStreak = 0;
        currentPointInStreak = 0;
        // console.log("loss! streak is " +currentStreak);
    }
  }

  return {
      bigStreak: biggestStreak,
      ave: pointsInStreak / biggestStreak
  };

} 

const result = getBiggestStreakAndAverage(games);
// it's outside the loop and we just get the updated biggestStreak comes out of the loop
// console.log("team top streak is : " + result.bigStreak+ " and ave is "+ result.ave.toFixed(2));


// Investigate the higher order .map function and use that to update 
// the game array with a team name property, for example 
// a single game result would like like
//we want to use map function here// allow us to add and remove things from our array

//() => {}  we call it fat arraw function, prams goes inside ()

const gameswithTeamName = games.map((game) => {
    // game.teamName = "Mona Parnian";
    // return game;
    //for having different name
    return {
        result : game.result,
        score: game.score,
        teamName: "Mona Parnian"
        };
    });