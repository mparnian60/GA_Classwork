class Game {
    constructor(domManager) {
        // console.log("game is running");
        this.domManager = domManager;
        this.player = null;
        this.robot = null;

    }

    setPlayerType(type) {
        this.player = new Player();
        this.player.setType(type);
        this.domManager.showSelectedActor(type);
    }

    startRound() {
        // console.log("starting round Function");
        this.robot = new Robot();
        this.robot.setRandomType();

        //decide who win the game
        const winner = this.decideWhoWin();
        console.log("Winner is " + winner);

        //clear the Dom
        this.domManager.clearTheDom();

        //show the winner
        this.domManager.showTheResult(winner,this.resetRound.bind(this));
    }

    resetRound() {
        this.domManager.clearTheDom();
        this.domManager.drawWellcomeScreen(this.setPlayerType.bind(this),this.startRound.bind(this));
    }

    decideWhoWin () {
        let humanWin = false;
        let robotWin = false;

        if(this.player.type === 'rock' && this.robot.type === 'paper') {
            robotWin = true;
        }
        if(this.player.type === 'paper' && this.robot.type === 'rock') {
            humanWin = true;
        }
        if(this.player.type === 'rock' && this.robot.type === 'scissor') {
            humanWin = true;
        }
        if(this.player.type === 'scissor' && this.robot.type === 'rock') {
            robotWin = true;
        }
        if(this.player.type === 'paper' && this.robot.type === 'scissor') {
            robotWin = true;
        }
        if(this.player.type === 'scissor' && this.robot.type === 'paper') {
            humanWin = true;
        }
        if(humanWin){
            return "human";
        }
        if(robotWin){
            return "robot";
        }
        return "none";
    }
}