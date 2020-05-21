class Game {
    constructor(domManager) {
        // console.log("Game class online!");
        this.domManager = domManager; // link games to the dom Manger
        this.player = null;// null means this variable exist but doesn't have any value
        this.robot = null;
    }

    setPlayerType(type) {

        this.player = new Actor();
        this.player.setType(type);
        this.domManager.showSelectedActor(type);
    }

    startRound() {
        // console.log("starting round");// when this console.log works, we find this function works
        //create a robot with random type
        this.robot = new Robot();
        this.robot.setRandomType();
        
        //work out who won
        const whoWon = this.decideRound();
        console.log("Winner is " + whoWon);

        //clear the dom and screen
        this.domManager.clearTheDom();

        //show a winer of the round 
        //this.domManager.drawRoundResultScreen(whoWon, this.startRound.bind(this));// this will active the nextround automatically
        // below is the line that show the winner and clear the screen to new game
        this.domManager.drawRoundResultScreen(whoWon, this.resetRound.bind(this));

    }

    resetRound() {
        this.domManager.clearTheDom();
        this.domManager.drawWellcomeScreen(this.setPlayerType.bind(this), this.startRound.bind(this));
    }

    decideRound() {
        let robotWin = false;
        let humanWin = false;

        //player: rock, robot paper = robot win
        if(this.player.type === 'rock' && this.robot.type === 'paper'){
           robotWin = true;
        }

        if(this.player.type === 'paper' && this.robot.type === 'scissor'){
            robotWin = true;
         }

         if(this.player.type === 'scissor' && this.robot.type === 'rock'){
            robotWin = true;
         }

         if(this.player.type === 'paper' && this.robot.type === 'rock'){
            humanWin = true;
         }
 
         if(this.player.type === 'scissor' && this.robot.type === 'paper'){
             humanWin = true;
          }
 
          if(this.player.type === 'rock' && this.robot.type === 'scissor'){
             humanWin = true;
          }

          if(humanWin) {
              return 'human';
          }

          if(robotWin) {
              return 'robot'
          }

          return 'none';

    }
}

