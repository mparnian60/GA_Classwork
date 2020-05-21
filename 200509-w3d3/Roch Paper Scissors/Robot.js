class Robot extends Actor{
    constructor() {
        super();

    }

    setRandomType() {
        //get random number 0-2
        const typeIndex = Math.floor(Math.random() * 3); // we get a randome number between 0 - 2

        if (typeIndex === 0) {
            console.log("Robot selecting rock");
            this.setType('rock');
        }
        else if(typeIndex === 1){
            console.log("Robot selecting paper");
            this.setType('paper');
        }
        else if(typeIndex === 2){
            console.log("Robot selecting scissor");
            this.setType('scissor');
        }
    }
}