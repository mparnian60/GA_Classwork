class GameManager {
    constructor() {
        // console.log("GameManger online!");
        this.domManager = new DomManager();
        this.startGame();
        this.game = null;
    }

    startGame() {
        this.game = new Game(this.domManager);// pass a reference to the dom manager
        this.domManager.drawWellcomeScreen(this.game.setPlayerType.bind(this.game), this.game.startRound.bind(this.game));// we pass (this.game.setPlayerType) this function as a parameter to 
        //drawWellcomeScreen function in DomManager
        //that bind(this) is something realted to scope
        //without this this function cannot access to player inside setPlayerType function
    }

}