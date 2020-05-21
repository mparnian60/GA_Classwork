class Robot extends Actor{
    constructor() {
        super();

    }

    setRandomType () {
        const RandType = Math.floor(Math.random() * 3);
        
        if(RandType === 0){
            console.log('Robot selecting rock');
            this.setType('rock');
        }
        else if(RandType === 1){
            console.log('Robot selecting scissor');
            this.setType('scissor');
        }
        else if(RandType === 2){
            console.log('Robot selecting paper');
            this.setType('paper');
        }
    
     }
}