class GameManager {
    constructor() {
        // console.log("gameManager running ok");
        this.domManager = new DomManager;
        this.startGame();
        this.game = null;
    }

    startGame() {
        this.game = new Game(this.domManager);
        this.domManager.drawWellcomeScreen(this.game.setPlayerType.bind(this.game), this.game.startRound.bind(this.game));
    }

}